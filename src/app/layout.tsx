import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GEC 21 Great Books - Final Projects",
  description: "Compilation of Final Projects for BSIT 4C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', fontFamily: '"Crimson Text", serif' }}
      >
        {children}
      </body>
    </html>
  );
}

