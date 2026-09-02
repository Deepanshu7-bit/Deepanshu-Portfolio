import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeCustomizer } from "@/components/theme/ThemeCustomizer";
import { BackgroundFx } from "@/components/theme/BackgroundFx";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ToastProvider } from "@/components/ui/Toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deepanshu Dhingra — Full Stack Developer",
  description:
    "Full Stack Developer based in Mohali, building modern, scalable and high-performance digital experiences with React, Next.js, TypeScript and Node.js.",
  keywords: [
    "Deepanshu Dhingra",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Mohali Developer",
    "Portfolio",
    "Web Application Architecture",
  ],
  authors: [{ name: "Deepanshu Dhingra", url: "mailto:dhingradeepanshu400@gmail.com" }],
  creator: "Deepanshu Dhingra",
  openGraph: {
    title: "Deepanshu Dhingra — Full Stack Developer",
    description:
      "Full Stack Developer based in Mohali, building modern, scalable and high-performance digital experiences with React, Next.js, TypeScript and Node.js.",
    type: "website",
    locale: "en_US",
    siteName: "Deepanshu Dhingra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepanshu Dhingra — Full Stack Developer",
    description:
      "Full Stack Developer based in Mohali, building modern, scalable and high-performance digital experiences with React, Next.js, TypeScript and Node.js.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${cormorant.variable}`}
    >
      <body className="font-sans antialiased selection:bg-accent selection:text-white">
        <ThemeProvider>
          <ToastProvider>
            <BackgroundFx />
            <CustomCursor />
            {children}
            <ThemeCustomizer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
