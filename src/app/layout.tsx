import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const lato = Lato({ subsets: ["latin"], weight: "400" });

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
        {children}

        <Toaster />
      </body>
    </html>
  );
}
