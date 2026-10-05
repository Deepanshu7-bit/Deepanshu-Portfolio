import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
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
  title: "Deepanshu Dhingra — Frontend Developer",
  description:
    "Frontend Developer based in Mohali, building modern, scalable and high-performance digital experiences with React, Next.js, TypeScript and Tailwind CSS.",
  keywords: [
    "Deepanshu Dhingra",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Mohali Developer",
    "Portfolio",
    "UI/UX Engineering",
  ],
  authors: [{ name: "Deepanshu Dhingra", url: "mailto:dhingradeepanshu400@gmail.com" }],
  creator: "Deepanshu Dhingra",
  openGraph: {
    title: "Deepanshu Dhingra — Frontend Developer",
    description:
      "Frontend Developer based in Mohali, building modern, scalable and high-performance digital experiences with React, Next.js, TypeScript and Tailwind CSS.",
    type: "website",
    locale: "en_US",
    siteName: "Deepanshu Dhingra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepanshu Dhingra — Frontend Developer",
    description:
      "Frontend Developer based in Mohali, building modern, scalable and high-performance digital experiences with React, Next.js, TypeScript and Tailwind CSS.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
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
      data-theme="ivory"
      data-accent="blue"
      data-motion="full"
      data-background="grain"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${cormorant.variable}`}
    >
      <body className="font-sans antialiased selection:bg-accent selection:text-white">
        <ThemeProvider>
          <ToastProvider>
            <BackgroundFx />
            <CustomCursor />
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
