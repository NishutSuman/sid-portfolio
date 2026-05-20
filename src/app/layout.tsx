import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";
import FramerLazyMotion from "@/components/framer-lazy-motion";
import AnalyticsBeacon from "@/components/analytics-beacon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sidhartha Sahoo – Graphic Designer | Video Editor | Cinematographer",
    template: "%s | Sidhartha Sahoo",
  },
  description:
    "Creative Graphic Designer & Video Editor with 4 years of experience in branding, social media content, event promotions, and cinematography. Skilled in creating engaging visuals, cinematic edits, and professional digital content that enhances brand identity and audience engagement.",
  keywords: [
    "Sidhartha Sahoo",
    "Graphic Designer",
    "Video Editor",
    "Cinematographer",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere Pro",
    "DaVinci Resolve",
    "After Effects",
    "Color Grading",
    "Branding",
    "Logo Design",
    "Social Media Design",
    "Motion Graphics",
    "DSLR Photography",
    "Event Photography",
    "Bhubaneswar",
    "Odisha",
    "India",
  ],
  authors: [{ name: "Sidhartha Sahoo" }],
  creator: "Sidhartha Sahoo",
  publisher: "Sidhartha Sahoo",
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
    type: "website",
    locale: "en_US",
    title: "Sidhartha Sahoo – Graphic Designer | Video Editor | Cinematographer",
    description:
      "Creative Graphic Designer & Video Editor with 4 years of experience in branding, social media content, event promotions, and cinematography.",
    siteName: "Sidhartha Sahoo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidhartha Sahoo – Graphic Designer | Video Editor | Cinematographer",
    description:
      "Crafting brand identities, cinematic edits, and powerful visual stories. Let's make your content stand out.",
  },
  category: "Graphic Design & Video Production",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sidhartha Sahoo",
              jobTitle: "Graphic Designer & Video Editor & Cinematographer",
              email: "mastersidhh@gmail.com",
              telephone: "7735624830",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhubaneswar",
                addressRegion: "Odisha",
                addressCountry: "IN",
              },
              knowsAbout: [
                "Graphic Design",
                "Video Editing",
                "Cinematography",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Adobe Premiere Pro",
                "DaVinci Resolve",
                "Adobe After Effects",
                "Color Grading",
                "Branding",
                "Logo Design",
                "Social Media Design",
                "Motion Graphics",
              ],
              worksFor: {
                "@type": "Organization",
                name: "DigiKite Infomatrix Pvt. Ltd.",
              },
              alumniOf: [
                {
                  "@type": "Organization",
                  name: "College of IT and Management, BPUT",
                },
                {
                  "@type": "Organization",
                  name: "College of Basic Science and Humanities, OUAT",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <FramerLazyMotion>
              <MouseMoveEffect />
              <Navbar />
              <main className="">{children}</main>
              <Footer />
              <JumpToTop />
              <Toaster position="top-center" />
            </FramerLazyMotion>
          </SmoothScroll>
        </div>
        <AnalyticsBeacon />
      </body>
    </html>
  );
}
