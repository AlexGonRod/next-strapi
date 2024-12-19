
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getMetadata } from "./lib/get-metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export async function generateMetadata() {
	const {title, siteDescription: description} = await getMetadata()
	return {
		title,
		description
  }
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
