import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Siddharth Nanda Gopal | Personal Brand & Portfolio",
  description: "Portfolio of Sai Siddharth Nanda Gopal — B.Tech IT student, product builder, and Full Stack developer specializing in scalable web technologies, AI tools, and elegant UI/UX design.",
  keywords: ["Sai Siddharth Nanda Gopal", "Sai Siddharth Portfolio", "Agni College of Technology", "Full Stack Developer", "AI Resume Builder", "LynkLathe Solutions", "CodeAlpha Portfoliosite"],
  authors: [{ name: "Sai Siddharth Nanda Gopal" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-[#020617] text-[#F8FAFC] selection:bg-[#00D084]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

