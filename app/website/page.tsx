"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"

export default function WebsitePage() {
  // Imagens do carrossel do hero
  const heroImages = [
    "/images/carrosel_1.jpg",
    "/images/carrosel_2.jpg",
    // Adicione mais imagens se quiser
  ]

  // Imagens do portfólio
  const portfolioImages = [
    "/images/Moisaico_4.jpg",
    "/images/Moisaico_3.jpg",
    "/images/Moisaico_2.jpg",
    "/images/Mosaico_1.jpg",
  ]

  const testimonials = [
    {
      quote: "O Lume Studio transformou completamente nossa identidade visual. O resultado superou todas as nossas expectativas.",
      author: "Maria Silva",
      role: "CEO, Boutique Essence"
    },
    {
      quote: "Profissionalismo e criatividade em cada detalhe. Recomendo o trabalho impecável do Lume Studio.",
      author: "João Santos",
      role: "Fundador, Tech Innovations"
    },
    {
      quote: "A simplicidade elegante que procurávamos. O Lume Studio capturou perfeitamente nossa essência.",
      author: "Thalles Henrique",
      role: "Diretora, Wellness Center"
    }
  ];

  const [currentHero, setCurrentHero] = useState(0)
  const [fade, setFade] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Variáveis para swipe
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      goTo("next");
    }
    if (touchEndX - touchStartX > 50) {
      goTo("prev");
    }
  };

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
      <div className="min-h-screen bg-[#e5e4e0] relative">
        {/* Textura Granulada */}
        <div className="absolute inset-0 opacity-30 pointer-events-none grain-texture"></div>

        {/* Header */}
        <header className="bg-[#19271b] px-4 md:px-8 h-16 md:h-20 flex items-center justify-between relative z-20">
          <div className="absolute inset-0 opacity-30 pointer-events-none grain-texture"></div>
          <div className="flex items-center relative z-10">
            <Link href="/">
              <Image
                src="/images/lume-logo-hq.png"
                alt="Lume Estúdio + Agência"
                width={300}
                height={300}
                className="w-24 h-24 md:w-24 md:h-24 lg:w-40 lg:h-40 filter brightness-0 invert cursor-pointer"
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4 lg:space-x-8 relative z-10">
            <Link
              href="/"
              className="text-[#e5e4e0] text-xs lg:text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300"
            >
              HOME
            </Link>
            <Link
              href="/sobre"
              className="text-[#e5e4e0] text-xs lg:text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300"
            >
              SOBRE
            </Link>
            <Link
              href="/portfolio"
              className="text-[#e5e4e0] text-xs lg:text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300"
            >
              PORTFÓLIO
            </Link>
            <Link
              href="/contato"
              className="text-[#e5e4e0] text-xs lg:text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300"
            >
              CONTATO
            </Link>
          </nav>
          {/* Menu mobile */}
          <button className="md:hidden relative z-10 text-[#e5e4e0]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          {/* Mobile menu overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black/70 z-30 flex flex-col items-center justify-center md:hidden">
              <nav className="space-y-8">
                <Link href="/" className="text-[#e5e4e0] text-2xl font-montserrat font-light block text-center" onClick={() => setMobileMenuOpen(false)}>
                  HOME
                </Link>
                <Link href="/sobre" className="text-[#e5e4e0] text-2xl font-montserrat font-light block text-center" onClick={() => setMobileMenuOpen(false)}>
                  SOBRE
                </Link>
                <Link href="/portfolio" className="text-[#e5e4e0] text-2xl font-montserrat font-light block text-center" onClick={() => setMobileMenuOpen(false)}>
                  PORTFÓLIO
                </Link>
                <Link href="/contato" className="text-[#e5e4e0] text-2xl font-montserrat font-light block text-center" onClick={() => setMobileMenuOpen(false)}>
                  CONTATO
                </Link>
              </nav>
              <button className="mt-12 text-[#e5e4e0] text-lg" onClick={() => setMobileMenuOpen(false)}>
                Fechar
              </button>
            </div>
          )}
        </header>

        {/* Main Content - Hero Section Full Width */}
        <main className="relative z-10">
          <div className="relative w-full">
            {/* Hero Image - Full Width (Carrossel) */}
            <div
              className="relative w-full h-48 sm:h-60 md:h-80 lg:h-[500px] xl:h-[600px] transition-all duration-700 overflow-hidden bg-[#e5e4e0]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                key={heroImages[currentHero]}
                src={heroImages[currentHero]}
                alt="Hero Carrossel"
                fill
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlNGUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="
                className={`object-cover transition-opacity duration-700 ${fade ? 'opacity-0' : 'opacity-100'}`}
                priority
              />
              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Botões de navegação */}
              <button
                onClick={() => goTo("prev")}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 md:p-2 z-20 transition-all"
                aria-label="Imagem anterior"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                onClick={() => goTo("next")}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 md:p-2 z-20 transition-all"
                aria-label="Próxima imagem"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>
        </main>

        {/* Nosso Trabalho Section */}
        <section className="py-12 md:py-20 lg:py-32 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-light text-[#19271b] mb-6 md:mb-8">
                  Nosso Trabalho
                </h2>
                <p className="font-montserrat text-base md:text-lg text-[#19271b] leading-relaxed mb-6 md:mb-8">
                  Cada projeto é uma jornada única de descoberta e criação. 
                  Combinamos estratégia, criatividade e simplicidade para 
                  desenvolver identidades visuais que conectam marcas aos 
                  seus públicos de forma autêntica e memorável.
                </p>
                <p className="font-montserrat text-base md:text-lg text-[#19271b] leading-relaxed">
                  Nossa abordagem minimalista não significa menos impacto. 
                  Pelo contrário, acreditamos que a verdadeira sofisticação 
                  está na capacidade de comunicar muito através de pouco.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {portfolioImages.map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-square bg-cover bg-center rounded-lg hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filosofia Section */}
        <section className="bg-[#19271b] text-[#e5e4e0] py-12 md:py-20 lg:py-32 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div 
                className="aspect-video bg-cover bg-center rounded-lg order-2 lg:order-1"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop)',
                }}
              />
              
              <div className="order-1 lg:order-2">
                <div className="mb-6 md:mb-8">
                  <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light block mb-2 text-[#e5e4e0]/20">
                    SIMPLES
                  </span>
                  <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light block mb-2 text-[#e5e4e0]/40">
                    LIVRE
                  </span>
                  <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light block text-[#e5e4e0]">
                    RÚSTICA
                  </span>
                </div>
                
                <p className="font-montserrat text-base md:text-lg leading-relaxed text-[#e5e4e0]/90">
                  Nossa filosofia se baseia em três pilares fundamentais que 
                  guiam cada decisão criativa. A simplicidade como forma de 
                  comunicação direta, a liberdade como expressão autêntica, 
                  e o rústico como conexão com o essencial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nova sessão Portifolios */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8">
            <div className="flex-1 flex items-center justify-center md:justify-start">
              <h2 className="font-montserrat text-5xl font-light text-[#19271b] text-left mx-auto md:mx-0">
                Portfólios
              </h2>
            </div>
            <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/portfolio">
                <div className="aspect-[3/4] bg-cover bg-center rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300" style={{backgroundImage: 'url(/images/conteinerportifolio_1.jpg)'}} />
              </Link>
              <Link href="/portfolio">
                <div className="aspect-[3/4] bg-cover bg-center rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300" style={{backgroundImage: 'url(/images/conteinerportifolio_2.jpg)'}} />
              </Link>
              <Link href="/portfolio">
                <div className="aspect-[3/4] bg-cover bg-center rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300" style={{backgroundImage: 'url(/images/conteinerportifolio_3.jpg)'}} />
              </Link>
              <Link href="/portfolio">
                <div className="aspect-[3/4] bg-cover bg-center rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300" style={{backgroundImage: 'url(/images/conteinerportifolio_4.jpg)'}} />
              </Link>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section className="py-12 md:py-20 lg:py-32 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-light text-[#19271b] text-center mb-12 md:mb-16">
              O que dizem sobre nós
            </h2>
            
            <div className="space-y-12 md:space-y-16">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="text-center"
                >
                  <blockquote className="font-montserrat text-xl md:text-2xl lg:text-3xl font-light text-[#19271b] mb-6 md:mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex flex-col items-center">
                    <p className="font-montserrat font-medium text-[#19271b]">
                      {testimonial.author}
                    </p>
                    <p className="font-montserrat text-[#19271b]/60 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
