"use client"

import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { useState } from "react";

const MilenaPortfolio = () => {
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

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[95vh] flex items-center justify-center overflow-hidden bg-white">
        <img 
          src="/images/milena/prancheta.jpg" 
          alt="Prancheta Milena" 
          className="absolute inset-0 w-full h-full object-contain md:object-fill bg-white"
        />
      </section>

      {/* Sobre Milena */}
      <section className="w-full h-auto min-h-[83vh] bg-[#E8E6E2] flex items-center justify-center py-12">
        <div className="max-w-7xl w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-20 text-black items-start ml-0 md:ml-8 lg:ml-12">
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="font-extrabold tracking-widest mb-3 text-3xl text-black">MILENA</h2>
            <p className="mb-6 text-xl text-black">Designer | Identidade Visual</p>
            <p className="mb-4 text-lg text-black text-justify">
              Milena é especialista em identidade visual e design gráfico, desenvolvendo marcas autênticas e soluções criativas para empresas e profissionais.
            </p>
            <p className="mb-4 text-lg text-black text-justify">
              Seu trabalho é pautado pela originalidade, atenção aos detalhes e busca constante por inovação e excelência.
            </p>
            <p className="mb-4 text-lg text-black text-justify">
              <span className="font-bold">Missão:</span> criar identidades visuais que transmitam a essência e os valores de cada cliente.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-extrabold tracking-widest mb-3 text-xl text-black">VALORES</h2>
            <ul className="mb-6 text-lg text-black">
              <li>Originalidade</li>
              <li>Detalhismo</li>
              <li>Inovação</li>
              <li>Compromisso</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-extrabold tracking-widest mb-3 text-xl text-black">SERVIÇOS</h2>
            <ul className="text-lg text-black">
              <li>Identidade Visual</li>
              <li>Design Gráfico</li>
              <li>Consultoria Visual</li>
              <li>Criação de Marca</li>
              <li>Materiais Promocionais</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sessão Milena 1 */}
      <section className="relative w-full h-[50vh] md:h-[95vh] flex items-center justify-center overflow-hidden bg-white">
        <img 
          src="/images/milena/sessionmilena.jpg" 
          alt="Sessão Milena 1" 
          className="absolute inset-0 w-full h-full object-contain md:object-fill bg-white"
        />
      </section>
      {/* Sessão Milena 2 */}
      <section className="relative w-full h-[50vh] md:h-[95vh] flex items-center justify-center overflow-hidden bg-white">
        <img 
          src="/images/milena/sessionmilena_2.jpg" 
          alt="Sessão Milena 2" 
          className="absolute inset-0 w-full h-full object-contain md:object-fill bg-white"
        />
      </section>
      {/* Sessão Milena 3 */}
      <section className="relative w-full h-[50vh] md:h-[95vh] flex items-center justify-center overflow-hidden bg-white">
        <img 
          src="/images/milena/sessionmilena_3.jpg" 
          alt="Sessão Milena 3" 
          className="absolute inset-0 w-full h-full object-contain md:object-fill bg-white"
        />
      </section>

      <Footer />
    </div>
  );
};

export default MilenaPortfolio; 