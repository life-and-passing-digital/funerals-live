import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RippleProvider from "@/components/RippleProvider";

export const metadata: Metadata = {
  title: "Funerals Live | Funeral Live Streaming Services Australia",
  description: "Compassionate, professional funeral live streaming services across Australia. Watch and honour loved ones from anywhere with our secure, high-quality broadcast service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RippleProvider />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
