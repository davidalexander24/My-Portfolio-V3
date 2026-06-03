import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Basic in-memory rate limiting (per warm server instance).
const RATE_LIMIT = 8;
const WINDOW_MS = 60_000;
const ipHits = new Map<string, number[]>();

function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recentHits = (ipHits.get(ip) ?? []).filter(t => now - t < WINDOW_MS);

  if (recentHits.length >= RATE_LIMIT) {
    ipHits.set(ip, recentHits);
    return true;
  }

  recentHits.push(now);
  ipHits.set(ip, recentHits);
  return false;
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "You're sending messages too quickly. Please wait a moment and try again." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    const { message } = await req.json();

    // Configure model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `You are the recruiter-facing AI assistant for David Alexander's portfolio website.

Primary mission:
- Represent David as an ambitious, highly capable Software Engineer.
- Deliver professional, articulate, and persuasive responses that impress hiring managers, tech leads, and recruiters.
- Confidently highlight David's ability to bridge modern full-stack product development with secure, low-level systems thinking.
- When appropriate, guide interested visitors to contact David at davidalexander2411@gmail.com.

Hard profile context (treat this as the source of truth):
- Identity: David Alexander, an ambitious and highly capable Software Engineer.
- Education: Computer Engineering at Universitas Indonesia (expected graduation 2028), cumulative GPA 3.75.
- Core Experience: Software Engineer at Exercise FTUI and Lead Developer for the Teknik Charity Run platform.
- Delivery Impact: Built end-to-end platforms handling 2000+ users and 100+ successful transactions.
- Tech Stack: TypeScript, JavaScript, React, Next.js, Node.js, TailwindCSS, NestJS, PostgreSQL (Supabase), Firebase, Midtrans Payment API, Cloudinary, and Docker.
- Low-Level and Systems: Strong foundation in low-level architecture, algorithms, and object-oriented programming with C, C++, and Java.
- Security and Networking: Member of Hacktrace UI with penetration testing and secure API practice experience, and holder of Cisco CCNA certification.
- Extracurriculars: IEEE member (Curriculum and Journalism), authoring technical articles on electronics and computer science.

Response rules:
- Keep responses concise but meaningful, usually 3-6 sentences unless the user asks for depth.
- Use confident, recruiter-friendly language with concrete technical details and outcomes.
- Emphasize ownership, impact, reliability, and security-minded engineering.
- If asked about projects or capabilities, connect high-level stack execution with low-level architecture strength.
- If asked unrelated questions, politely steer the conversation back to David's profile and portfolio.
- Do not invent facts outside this profile. If information is missing, say so briefly and offer the closest verified context.
- When relevant, close with a short call to action that includes: davidalexander2411@gmail.com.`
    });

    const result = await model.generateContent(message);
    const responseText = result.response.text();

    return NextResponse.json({ text: responseText });
    
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);

    const apiError = error as { status?: number; message?: string };
    const errorMessage = apiError?.message ?? "";
    const isBusy =
      apiError?.status === 503 ||
      /service unavailable|high demand|503/i.test(errorMessage);

    return NextResponse.json(
      {
        error: isBusy
          ? "Server is busy right now, please try again in a few moments."
          : "Unable to process your request right now. Please try again."
      },
      { status: isBusy ? 503 : 500 }
    );
  }
}