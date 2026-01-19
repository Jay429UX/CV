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
  title: "Jay Herbert - Senior UX/UI Designer | Fintech, Gaming & DeFi",
  description: "Senior UX/UI Designer with 14+ years of experience shipping products across fintech, gaming, and DeFi. Specializing in turning complex systems into intuitive experiences. Currently at Magic Eden.",
  metadataBase: new URL("https://www.jayherbert.xyz"),
  keywords: [
    "UX Designer",
    "UI Designer",
    "Senior UX Designer",
    "Product Designer",
    "DeFi Designer",
    "Web3 Designer",
    "Fintech Designer",
    "Gaming UX",
    "Design Systems",
    "User Research",
    "Figma",
    "Northampton",
    "UK",
    "Jay Herbert",
    "Magic Eden",
    "NFT",
    "Blockchain UX",
  ],
  authors: [{ name: "Jay Herbert", url: "https://layer84.co.uk" }],
  creator: "Jay Herbert",
  publisher: "Jay Herbert",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://www.jayherbert.xyz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Jay Herbert - Senior UX/UI Designer | Fintech, Gaming & DeFi",
    description: "Senior UX/UI Designer with 14+ years of experience shipping products across fintech, gaming, and DeFi. Specializing in turning complex systems into intuitive experiences.",
    url: "https://www.jayherbert.xyz",
    siteName: "Jay Herbert - UX/UI Designer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jay Herbert - Senior UX/UI Designer specializing in DeFi, Fintech, and Gaming",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Herbert - Senior UX/UI Designer",
    description: "Senior UX/UI Designer with 14+ years of experience in fintech, gaming, and DeFi. Currently at Magic Eden.",
    images: ["/og-image.png"],
    creator: "@jayherbert",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jay Herbert",
  jobTitle: "Senior UX/UI Designer",
  description: "Senior UX/UI Designer with 14+ years of experience shipping products across fintech, gaming, and DeFi.",
  url: "https://www.jayherbert.xyz",
  sameAs: [
    "https://www.layer84.co.uk",
    "https://www.youtube.com/@3DJay429",
  ],
  email: "Jaylukeherbert@gmail.com",
  telephone: "+447429579090",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Northampton",
    addressCountry: "UK",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of the Arts, London",
  },
  worksFor: {
    "@type": "Organization",
    name: "Magic Eden",
  },
  knowsAbout: [
    "UX Design",
    "UI Design",
    "User Research",
    "Design Systems",
    "Prototyping",
    "DeFi",
    "Web3",
    "Fintech",
    "Gaming",
    "Figma",
    "Framer",
    "Webflow",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
