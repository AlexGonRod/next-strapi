
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'
import { CollectionsSection } from '@components/collections-section'
import { ReviewsSection } from '@components/reviews-section'
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
			  <Header />
       				 {children}
			  <ReviewsSection />
			  <CollectionsSection />
			  <Footer />
      </body>
    </html>
  );
}
