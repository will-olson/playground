import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { QueryProvider } from "@/components/query-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Sigma Playground - Community Hub for Data Visualizations",
  description: "Discover, share, and showcase amazing data visualizations built with Sigma. Join our community of data professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmMono.variable} font-sans antialiased`}>
        <QueryProvider>
          <div className="min-h-screen bg-background-light">
            <Navigation />
            <main>{children}</main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
