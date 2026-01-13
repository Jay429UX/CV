import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay Herbert - UX/UI Designer",
  description: "UX/UI Designer with 14+ years of experience shipping products across fintech, gaming, and DeFi. Specializing in turning complex systems into intuitive experiences.",
  metadataBase: new URL("https://cv-rouge-five.vercel.app"),
  openGraph: {
    title: "Jay Herbert - UX/UI Designer",
    description: "UX/UI Designer with 14+ years of experience shipping products across fintech, gaming, and DeFi. Specializing in turning complex systems into intuitive experiences.",
    url: "https://cv-rouge-five.vercel.app",
    siteName: "Jay Herbert CV",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jay Herbert - UX/UI Designer",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Herbert - UX/UI Designer",
    description: "UX/UI Designer with 14+ years of experience shipping products across fintech, gaming, and DeFi.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
