// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css' // Import Tailwind CSS

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['500', '600', '900'] 
})

const description =
  "Fullstack engineer building commerce and payment systems that real people use. Computer Engineering at Universitas Indonesia.";

export const metadata = {
  title: "David Alexander",
  description,
  openGraph: {
    title: "David Alexander",
    description,
    url: "https://dapid.vercel.app",
    siteName: "David Alexander",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}