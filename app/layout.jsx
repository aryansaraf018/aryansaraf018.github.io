import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Aryan Saraf, Systems & Infrastructure Engineer",
  description:
    "M.S. CS @ USC. Building scalable systems, distributed infrastructure, and latency-sensitive platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${space.variable} ${mono.variable}`}>
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
