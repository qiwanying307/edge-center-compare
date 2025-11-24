import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edge vs Center Cloud Compare",
  description: "Compare Edge and Center Cloud performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
