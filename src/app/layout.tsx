import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LadyRuthie's Events Center | Haatso, Accra — Ghana · a touch of class",
  description:
    "LadyRuthie's Events Center — a full-service events venue in Haatso, Accra. Garden, banquet hall, boardroom & open lawn for weddings, corporate events and celebrations. In-house catering, decoration & AV.",
  keywords: [
    "LadyRuthie's Events Center",
    "events center Accra",
    "wedding venue Haatso",
    "event venue Ghana",
    "wedding venue Accra",
    "corporate events Ghana",
    "banquet hall Accra",
    "Accra events center",
  ],
  authors: [{ name: "LadyRuthie's Events Center" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "LadyRuthie's Events Center — a touch of class",
    description:
      "A full-service events center in Haatso, Accra. Weddings, corporate events and celebrations — with a touch of class.",
    url: "https://ladyruthiesevents.com",
    siteName: "LadyRuthie's Events Center",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LadyRuthie's Events Center",
    description:
      "A full-service events center in Haatso, Accra — Ghana. a touch of class.",
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
        className={`${fraunces.variable} ${workSans.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
