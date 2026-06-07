import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeNest Studio | Web Development Agency",
  description:
    "We craft modern web experiences with cutting-edge technologies. Full-stack development, UI/UX design, and cloud solutions.",
  openGraph: {
    title: "CodeNest Studio | Web Development Agency",
    description:
      "We craft modern web experiences with cutting-edge technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
