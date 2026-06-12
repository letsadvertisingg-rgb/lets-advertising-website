import type { Metadata } from "next";
import localFont from "next/font/local";
import { Merriweather } from "next/font/google";
import "./globals.css";

const googleSansFlex = localFont({
  src: [
    { path: "../../public/fonts/GoogleSans-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/GoogleSans-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/GoogleSans-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/GoogleSans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-google-sans-flex",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Let's Advertising",
  description:
    "We help businesses attract the right audience, generate quality leads, and turn visitors into paying customers. More customers, more leads, more sales — with clear and transparent reporting.",
  openGraph: {
    title: "Let's Advertising",
    description:
      "We help businesses attract the right audience, generate quality leads, and turn visitors into paying customers. More customers, more leads, more sales — with clear and transparent reporting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${googleSansFlex.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
