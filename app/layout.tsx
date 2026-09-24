import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koduru Eswar Reddy | Software Engineer & AI/ML Developer",
  description:
    "Portfolio of Koduru Eswar Reddy — Software Engineer specializing in Java, Data Structures & Algorithms, AI/ML, Cloud Computing (AWS/Azure), and Web Development.",
  keywords: [
    "Koduru Eswar Reddy",
    "Eswar Reddy",
    "Software Engineer",
    "Java Developer",
    "AI/ML Engineer",
    "Data Structures & Algorithms",
    "SR University",
    "Full Stack Developer",
    "CodeFocus",
    "AWS",
    "Azure"
  ],
  authors: [{ name: "Koduru Eswar Reddy" }],
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#08090d] text-gray-100 selection:bg-purple-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
