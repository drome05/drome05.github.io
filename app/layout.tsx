import type { Metadata } from "next";
import { spaceGrotesk, spaceMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Romero | ML & Computer Vision Engineer",
  description:
    "Portfolio of Daniel Romero, an ML and computer vision engineer and CS student building systems that see, reason, and act.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
