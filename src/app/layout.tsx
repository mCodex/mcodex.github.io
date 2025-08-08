import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "mCodex - Full-Stack Developer & JavaScript Enthusiast",
  description: "React Native, React.js, and Node.js developer passionate about creating exceptional mobile and web experiences. Available for freelance work.",
  keywords: ["React Native", "React.js", "Node.js", "JavaScript", "TypeScript", "Mobile Development", "Web Development", "Full Stack Developer"],
  authors: [{ name: "mCodex" }],
  creator: "mCodex",
  publisher: "mCodex",
  robots: "index, follow",
  openGraph: {
    title: "mCodex - Full-Stack Developer",
    description: "React Native, React.js, and Node.js developer passionate about creating exceptional mobile and web experiences.",
    url: "https://mcodex.dev",
    siteName: "mCodex",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mCodex - Full-Stack Developer",
    description: "React Native, React.js, and Node.js developer passionate about creating exceptional mobile and web experiences.",
    creator: "@mcodex",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#007BFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
