import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lato"
});

export const metadata: Metadata = {
  title: "Lends",
  description: "Lending platform for office supplies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-lato antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
