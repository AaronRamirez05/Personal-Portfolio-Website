import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL('https://aaronmramirez.dev'),
  title: "Portfolio - Aaron Ramirez",
  description: "Personal portfolio showcasing my work, resume, and powerlifting journey",
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/portfolioLogo.png' },
    ],
  },
  openGraph: {
    title: "Aaron Ramirez - Software Developer & Engineer",
    description: "Full-stack developer passionate about code and iron. Check out my projects and powerlifting journey.",
    url: "https://aaronmramirez.dev",
    siteName: "Aaron Ramirez Portfolio",
    images: [
      {
        url: '/portfolioLogo.png',
        width: 1200,
        height: 630,
        alt: 'Aaron Ramirez Portfolio Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aaron Ramirez - Software Developer & Engineer",
    description: "Full-stack developer passionate about code and iron. Check out my projects and powerlifting journey.",
    images: ['/portfolioLogo.png'],
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
