"use client"

import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { useState } from "react";

const StephanyPortfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <button className="md:hidden relative z-10 text-[#e5e4e0]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
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

      {/* Breadcrumb */}
      <div className="px-4 md:px-8 py-4">
        <nav className="text-sm text-[#666]">
          <Link href="/portfolio" className="hover:text-[#222] transition-colors">Portfólio</Link>
          <span className="mx-2">/</span>
          <span className="text-[#222]">Stephany</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <img src="/images/logostephany.png" alt="Logo Stephany" className="h-32 md:h-48 w-auto mx-auto mb-8" />
            <h1 className="text-4xl md:text-6xl font-bold text-[#222] mb-6 font-montserrat tracking-wide">Stephany</h1>
            <p className="text-xl md:text-2xl text-[#666] max-w-3xl mx-auto font-montserrat">
              Design de marca criativo e estratégia de comunicação
            </p>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#222] mb-16 font-montserrat tracking-wide">Projetos Realizados</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#222] font-montserrat">Branding Criativo</h3>
              <p className="text-[#666] leading-relaxed">
                Desenvolvimento de uma identidade visual única e criativa que 
                destaca a personalidade e diferenciação da marca da Stephany.
              </p>
              <ul className="space-y-2 text-[#666]">
                <li>• Logo criativo e memorável</li>
                <li>• Paleta de cores vibrante</li>
                <li>• Tipografia personalizada</li>
                <li>• Elementos gráficos únicos</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#222] font-montserrat">Marketing Digital</h3>
              <p className="text-[#666] leading-relaxed">
                Criação de estratégias de marketing digital e conteúdo visual 
                que fortalecem a presença online e engajam o público.
              </p>
              <ul className="space-y-2 text-[#666]">
                <li>• Estratégia de redes sociais</li>
                <li>• Conteúdo visual criativo</li>
                <li>• Campanhas digitais</li>
                <li>• Templates personalizados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-12 font-montserrat tracking-wide">Resultados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#222] mb-2">+250%</h3>
              <p className="text-[#666]">Crescimento no engajamento</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#222] mb-2">+160%</h3>
              <p className="text-[#666]">Aumento no reconhecimento</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#222] mb-2">100%</h3>
              <p className="text-[#666]">Satisfação do cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-[#19271b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e5e4e0] mb-6 font-montserrat tracking-wide">
            Quer um projeto similar?
          </h2>
          <p className="text-xl text-[#e5e4e0] mb-8 opacity-80">
            Vamos criar algo incrível para o seu negócio
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-[#e5e4e0] text-[#19271b] px-8 py-4 rounded-lg font-semibold hover:bg-[#d4d3cf] transition-colors duration-300"
          >
            Fale Conosco
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StephanyPortfolio; 