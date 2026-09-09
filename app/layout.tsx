import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PersonJsonLd } from "@/components/person-jsonld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://serdar.abali.fi";
const SITE_TITLE = "Serdar Abali | Full-Stack Robotics Engineer";
const SITE_DESCRIPTION =
  "Serdar Abali is a full-stack robotics engineer in Helsinki, Finland, building complete hardware-to-code platforms: ROS2 autonomy, UGV platforms, mechatronics, bionic prosthetics, custom CAD and PCB design.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Serdar Abali",
    "Robotics Engineer",
    "ROS2",
    "UGV",
    "Bionic Hand",
    "Mechatronics",
  ],
  authors: [{ name: "Serdar Abali", url: SITE_URL }],
  creator: "Serdar Abali",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Serdar Abali",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    firstName: "Serdar",
    lastName: "Abali",
    username: "SerdarAbali",
    images: [
      {
        url: "/images/hero/mainimage.jpg",
        width: 1200,
        height: 630,
        alt: "Serdar Abali working on an autonomous robot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@serdar_abali",
    images: ["/images/hero/mainimage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
