import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my first next app",
  description: "this is my first next js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
      {children}</body>
    </html>
  );
}

function NavBar()
{
  return <div>
    <p className="p-4 broder-b">my first next js app</p>
  </div>
}
