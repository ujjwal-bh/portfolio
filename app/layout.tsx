import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UJJWAL BHATTARAI",
  description: "Hi Everyone, Welcome to my portfolio. Explore creative designs, captivating  web solutions. Get to know and connect with me. Browse the portfolio now.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/my-avatar.png" type="image/png" sizes="16*16" />
      </head>
      <body className={inter.className}>
        <Toaster/>
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
