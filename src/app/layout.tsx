
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata, } from 'next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
	title: {
		template: '%s -  JewelSite',
		default: 'San Saru'
	},
	description: 'Joyas con alma'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	
  return (
	  <html lang="en">
		  
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
