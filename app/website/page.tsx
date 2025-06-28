"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"

export default function WebsitePage() {
  // Imagens do carrossel do hero
  const heroImages = [
    "/images/hero-plants.jpeg",
    "/images/conteiner2.JPG",
    // Adicione mais imagens se quiser
  ]
  const [currentHero, setCurrentHero] = useState(0)
  const [fade, setFade] = useState(true)

  // Troca automática com fade
  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 3500)
    const interval = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setCurrentHero((prev) => (prev + 1) % heroImages.length)
        setFade(false)
      }, 500)
    }, 4000)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [heroImages.length])

  // Troca manual
  const goTo = (dir: "prev" | "next") => {
    setFade(true)
    setTimeout(() => {
      setCurrentHero((prev) => {
        if (dir === "next") return (prev + 1) % heroImages.length
        return (prev - 1 + heroImages.length) % heroImages.length
      })
      setFade(false)
    }, 300)
  }

  return (
    <div>
      {/* Conteúdo da página */}
      <div className="min-h-screen bg-[#19271b] relative">
        {/* Textura Granulada */}
        <div className="absolute inset-0 opacity-30 pointer-events-none grain-texture"></div>

        {/* Header */}
        <header className="bg-transparent px-4 md:px-8 h-20 flex items-center justify-between relative z-20">
          <div className="flex items-center relative">
            <Image
              src="/images/lume-logo-hq.png"
              alt="Lume Estúdio + Agência"
              width={300}
              height={300}
              className="w-24 h-24 md:w-40 md:h-40 filter brightness-0 invert"
              priority
            />
          </div>
          <nav className="flex space-x-8">
            <Link
              href="/"
              className="text-[#e5e4e0] text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300"
            >
              HOME
            </Link>
            <Link
              href="/sobre"
              className="text-[#e5e4e0] text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300"
            >
              SOBRE
              
            </Link>
            <Link
              href="/portfolio"
              className="text-[#e5e4e0] text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300"
            >
              PORTFÓLIO
            </Link>
            <Link
              href="/contato"
              className="text-[#e5e4e0] text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300"
            >
              CONTATO
            </Link>
          </nav>
        </header>

        {/* Main Content - Hero Section Full Width */}
        <main className="relative z-10">
          <div className="relative w-full">
            {/* Hero Image - Full Width (Carrossel) */}
            <div className="relative w-full h-60 sm:h-80 md:h-[500px] lg:h-[600px] transition-all duration-700 overflow-hidden">
              <Image
                key={heroImages[currentHero]}
                src={heroImages[currentHero]}
                alt="Hero Carrossel"
                fill
                className={`object-cover transition-opacity duration-700 ${fade ? 'opacity-0' : 'opacity-100'}`}
                priority
              />
              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Botões de navegação */}
              <button
                onClick={() => goTo("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-20 transition-all"
                aria-label="Imagem anterior"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                onClick={() => goTo("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-20 transition-all"
                aria-label="Próxima imagem"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>

              {/* Logo overlay on image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="max-w-md">
                  <Image
                    src="/images/lume-logo-hq.png"
                    alt="Lume Estúdio + Agência"
                    width={300}
                    height={225}
                    className="w-full h-auto filter brightness-0 invert drop-shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Container de Fotos Adicionais */}
        <section className="w-full max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Adicione suas fotos abaixo, exemplo: */}
          {/* <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
            <Image src="/images/sua-foto.jpg" alt="Descrição" width={400} height={256} className="object-cover w-full h-full" />
          </div> */}
        </section>
      </div>
      <Footer />
    </div>
  )
}
