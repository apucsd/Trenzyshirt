import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";
import { Toaster } from "react-hot-toast";

const lato = Lato({ subsets: ["latin-ext"], weight: "300" });

export const metadata: Metadata = {
  title: "TrenzyShirt",
  description: "Classic Raglan Shirts For Men",
  icons: {
    icon: "https://cdn.icon-icons.com/icons2/1247/PNG/256/4_84292.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
