import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeNest Studio | Enterprise Web Development Agency",
  description:
    "We build Awwwards-winning, premium, enterprise-grade web applications. Elevate your brand with cutting-edge UI/UX design, motion graphics, and high-performance engineering.",
  keywords: "web development, agency, enterprise, UI/UX, Next.js, Framer Motion",
  openGraph: {
    title: "CodeNest Studio | Enterprise Web Development Agency",
    description:
      "We build Awwwards-winning, premium, enterprise-grade web applications. Elevate your brand with cutting-edge UI/UX design.",
    type: "website",
    url: "https://codenest-studio.example.com",
    siteName: "CodeNest Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodeNest Studio OpenGraph",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeNest Studio | Enterprise Web Development Agency",
    description: "We build Awwwards-winning, premium web applications.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased bg-[#0a0a0a] text-white selection:bg-white/20 selection:text-white`}>
        <ThemeProvider>
          <CustomCursor />
          <AnimatedBackground />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
