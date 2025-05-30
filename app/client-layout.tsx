"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "../components/header" // {/* Updated import */}
import { CartProvider } from "../lib/cart-context" // {/* Updated import */}
import { AuthProvider } from "../lib/auth-context"  // {/* Updated import */}
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isAuthPage = pathname === "/login" || pathname === "/signup"

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            {!isAuthPage && <Header />}
            <main>{children}</main>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
