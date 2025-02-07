import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";


export const metadata: Metadata = {
  title: "Sonic Hand Car wash",
  description: "Wash your in a model Way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
