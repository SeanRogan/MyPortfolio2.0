import './globals.css';
import { Inter } from 'next/font/google';
import React from "react";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">

    <body className={inter.className}>
    <Navbar/>
      {children}
    <Footer/>
    </body>
    </html>
  )
}
