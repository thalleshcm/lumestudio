import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Montserrat } from "next/font/google"
import "./globals.css"

const blackMango = localFont({
  src: [
    {
      path: "./fonts/black-mango-thin.ttf",
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
  title: "Lume Studio® - Bio",
  description: "Lume Studio Bio Page",
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
