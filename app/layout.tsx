import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Portfolio - Aaron Ramirez",
  description: "Personal portfolio showcasing my work, resume, and powerlifting journey",
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/portfolioLogo.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
