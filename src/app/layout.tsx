import type { Metadata } from "next";
import { Architects_Daughter } from "next/font/google";
import "./globals.css";
const handwriting = Architects_Daughter({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={handwriting.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
