import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Dropshield Mentoring</title>
      </head>
      <body className={geistSans.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

export const metadata = {
      generator: 'v0.app'
    };
