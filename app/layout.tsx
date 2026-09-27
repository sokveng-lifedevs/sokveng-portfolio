import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { seo, profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title:       seo.title,
  description: seo.description,
  metadataBase: new URL(seo.url),
  openGraph: {
    title:       seo.title,
    description: seo.description,
    url:         seo.url,
    siteName:    profile.brand,
    images:      [{ url: seo.ogImage, width: 1200, height: 630 }],
    type:        "website",
    locale:      "en_US",
  },
  twitter: {
    card:        "summary_large_image",
    title:       seo.title,
    description: seo.description,
    images:      [seo.ogImage],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  authors: [{ name: profile.name }],
  keywords: ["software engineer", "python developer", "backend developer", "fastapi", "sokveng ean"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
