# My personal portfolio website

Live at [dapid.vercel.app](https://dapid.vercel.app).

Built with Next.js 15, React 19, Tailwind CSS and Framer Motion. It includes an AI assistant that answers questions about my projects and experience: a Next.js route handler calls Gemini with a fixed profile as its only source of truth, behind per-IP rate limiting.

## Run locally

```bash
npm install
npm run dev
```

The assistant needs a `GEMINI_API_KEY` environment variable.
