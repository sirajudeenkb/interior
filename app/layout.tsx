import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Br Interior",
  description: "Br Interior your premier destination for luxury and modern interior design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://res.cloudinary.com/practicaldev/image/fetch/s--8p7s7734--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://www.faviator.xyz/assets/logo.png"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
