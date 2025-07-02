"use client"

import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { useState } from "react";

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const clients = [
    { name: 'Boutique Essence', logo: 'BE' },
    { name: 'Tech Innovations', logo: 'TI' },
    { name: 'Wellness Center', logo: 'WC' },
    { name: 'Artisan Coffee', logo: 'AC' },
    { name: 'Modern Architecture', logo: 'MA' },
    { name: 'Green Living', logo: 'GL' },
    { name: 'Creative Studio', logo: 'CS' },
    { name: 'Luxury Homes', logo: 'LH' },
    { name: 'Organic Foods', logo: 'OF' },
    { name: 'Digital Agency', logo: 'DA' },
    { name: 'Fashion Forward', logo: 'FF' },
    { name: 'Natural Beauty', logo: 'NB' },
  ];

  return (
    <div className="bg-[#E7E6E2] min-h-screen text-[#222]">
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
          <Link href="/" className="text-[#e5e4e0] text-xs lg:text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300">HOME</Link>
          <Link href="/sobre" className="text-[#e5e4e0] text-xs lg:text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300">SOBRE</Link>
          <Link href="/portfolio" className="text-[#e5e4e0] text-xs lg:text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300">PORTFÓLIO</Link>
          <Link href="/contato" className="text-[#e5e4e0] text-xs lg:text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300">CONTATO</Link>
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
              <Link href="/" className="text-[#e5e4e0] text-2xl font-montserrat font-light block text-center" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
              <Link href="/sobre" className="text-[#e5e4e0] text-2xl font-montserrat font-light block text-center" onClick={() => setMobileMenuOpen(false)}>SOBRE</Link>
              <Link href="/portfolio" className="text-[#e5e4e0] text-2xl font-montserrat font-light block text-center" onClick={() => setMobileMenuOpen(false)}>PORTFÓLIO</Link>
              <Link href="/contato" className="text-[#e5e4e0] text-2xl font-montserrat font-light block text-center" onClick={() => setMobileMenuOpen(false)}>CONTATO</Link>
            </nav>
            <button className="mt-12 text-[#e5e4e0] text-lg" onClick={() => setMobileMenuOpen(false)}>Fechar</button>
          </div>
        )}
      </header>

      {/* Nova sessão com imagem do portfólio atualizado */}
      <section className="py-20 px-4 md:px-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#222] mb-12 font-montserrat tracking-wide">Nossos Clientes</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 mx-auto">
          <Link href="/portfolio/leticia" className="transition-transform duration-300 hover:scale-105">
            <img src="/images/logoleticia.png" alt="Logo Letícia" className="h-56 w-auto cursor-pointer" />
          </Link>
          <Link href="/portfolio/marlon" className="transition-transform duration-300 hover:scale-105">
            <img src="/images/logomarlon.png" alt="Logo Marlon" className="h-56 w-auto cursor-pointer" />
          </Link>
          <Link href="/portfolio/milena" className="transition-transform duration-300 hover:scale-105">
            <img src="/images/logomilena.png" alt="Logo Milena" className="h-56 w-auto cursor-pointer" />
          </Link>
          <Link href="/portfolio/stephany" className="transition-transform duration-300 hover:scale-105">
            <img src="/images/logostephany.png" alt="Logo Stephany" className="h-56 w-auto cursor-pointer" />
          </Link>
          <Link href="/portfolio/victor" className="transition-transform duration-300 hover:scale-105">
            <img src="/images/logovictor.png" alt="Logo Victor" className="h-56 w-auto cursor-pointer" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio; 