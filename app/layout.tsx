import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Navbar from "./components/Navbar";
import Providers from "./components/Providers";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

export const metadata: Metadata = {
  title: "B L O G | Tharisha Perera",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} bg-neutral-100 text-black dark:bg-gray-900 dark:selection:bg-gray-700 dark:text-white h-full selection:bg-gray-300`}
      >
        <Providers>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
