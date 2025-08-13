import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
  description:
    "Çocukların akademik, sosyal, fiziksel ve bilişsel gelişimlerini destekleyen atölye programları ve koçluk hizmetleri. Antalya Muratpaşa'da hizmet vermekteyiz.",
  keywords: "eğitim, koçluk, çocuk gelişimi, kariyer danışmanlığı, atölye, seminer, Antalya, Muratpaşa",
  authors: [{ name: "SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi" }],
  openGraph: {
    title: "SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
    description:
      "Çocukların akademik, sosyal, fiziksel ve bilişsel gelişimlerini destekleyen atölye programları ve koçluk hizmetleri.",
    url: "https://sevay-egitim.com",
    siteName: "SEV-AY Eğitim",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEV-AY Eğitim ve Kariyer Danışmanlık Merkezi",
    description:
      "Çocukların akademik, sosyal, fiziksel ve bilişsel gelişimlerini destekleyen atölye programları ve koçluk hizmetleri.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
