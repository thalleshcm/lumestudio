import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Montserrat } from "next/font/google"
import "./globals.css"

const blackMango = localFont({
  src: [
    {
      path: "../public/fonts/BlackMango-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-black-mango",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Auth Studio® - Bio",
  description: "Auth Studio Bio Page",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${blackMango.variable} ${montserrat.variable} font-montserrat`}>{children}</body>
    </html>
  )
}
