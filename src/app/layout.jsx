import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FoodHub",
  description: "This App show you all about food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 flex flex-col min-h-screen`} suppressHydrationWarning={true}
      >
        {/* Header: Responsive padding and flex wrapping */}
        <header className="sticky top-0 z-50 bg-white shadow-sm w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            {/* Logo Area */}
            <Link href="/home" className="flex-shrink-0">
              <Image src="/logo.png"
              width={120} height={40}
                alt="FoodHub Logo"
                className="w-[100px] md:w-[120px] h-auto"/>
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-4 sm:gap-6 text-sm md:text-base text-gray-700 font-medium">
              <Link
                href="/home"
                className="hover:text-red-500 transition whitespace-nowrap"
              >
                Home
              </Link>
              <Link
              prefetch={false}
                href="/food"
                className="hover:text-red-500 transition whitespace-nowrap"
              >
                Food
              </Link>
              <Link
                href="/about"
                className="hover:text-red-500 transition whitespace-nowrap"
              >
                About
              </Link>
              <Link
                href="/login"
                className="hover:text-red-500 transition whitespace-nowrap"
              >
                Login
              </Link>
            </nav>
          </div>
        </header>

        {/* Main: Responsive horizontal padding and max-width for large screens */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
