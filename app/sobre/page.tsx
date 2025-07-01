"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Sobre = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: 'Naming',
      description: 'Desenvolvimento de nomes únicos e memoráveis que capturam a essência da sua marca.'
    },
    {
      title: 'Identidade Visual',
      description: 'Criação completa de sistemas visuais coesos, do logotipo às aplicações.'
    },
    {
      title: 'Registro INPI',
      description: 'Assessoria completa para proteção legal da sua marca e propriedade intelectual.'
    }
  ];

  return (
    <div className="bg-[#19271b] min-h-screen w-full">
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

      {/* Hero Section */}
      <section className="py-4 lg:py-6">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-montserrat text-5xl lg:text-6xl font-light text-[#e5e4e0] mb-8">
            Sobre o Lume Studio
          </h1>
          <p className="font-montserrat text-xl text-[#e5e4e0]/80 leading-relaxed">
            Um estúdio dedicado à criação de identidades visuais autênticas e atemporais
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-8">
        <div className="w-full h-[80vh] md:h-[90vh] relative p-0 m-0 flex flex-col-reverse md:flex-row items-end md:items-center gap-8">
          <img
            src="/images/stephanybg2.png"
            alt="Sobre mim"
            className="object-contain object-left h-auto max-h-full max-w-xs md:max-w-sm ml-0 p-0 m-0"
            style={{ objectPosition: 'center' }}
          />
          <motion.div
            className="h-full flex flex-col justify-center items-end md:items-start px-6 md:px-6 md:ml-48 max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#e5e4e0] mb-12 font-montserrat tracking-widest text-right md:text-left">SOBRE MIM</h2>
            <p className="text-[#e5e4e0]/90 text-base md:text-xl font-montserrat max-w-4xl text-right md:text-left">
              Olá, me chamo Stephany, o Lume Studio surgiu na minha vida de uma forma inesperada, sempre gostei de design, embora nunca tenha imaginado seguir esse sonho, o incentivo de pessoas queridas que admiravam meus projetos me fez continuar, hoje estou realizando esse desejo com muita alegria!<br /><br />Seja bem-vindo(a)! espero que goste dos meus trabalhos!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="bg-[#2d4a32] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-4xl font-light text-[#e5e4e0] mb-12">
            Nossa Filosofia
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-montserrat text-2xl font-medium text-[#e5e4e0] mb-4">
                Simplicidade
              </h3>
              <p className="font-montserrat text-[#e5e4e0]/80 leading-relaxed">
                A verdadeira sofisticação está na capacidade de comunicar 
                muito através de pouco. Cada elemento tem propósito.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat text-2xl font-medium text-[#e5e4e0] mb-4">
                Autenticidade
              </h3>
              <p className="font-montserrat text-[#e5e4e0]/80 leading-relaxed">
                Cada marca tem uma personalidade única. Nosso papel é 
                descobri-la e traduzi-la visualmente de forma genuína.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat text-2xl font-medium text-[#e5e4e0] mb-4">
                Atemporalidade
              </h3>
              <p className="font-montserrat text-[#e5e4e0]/80 leading-relaxed">
                Criamos designs que resistem ao tempo, evitando tendências 
                passageiras em favor de soluções duradouras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-montserrat text-4xl font-light text-[#e5e4e0] text-center mb-16">
            Nossos Serviços
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-[#2d4a32] rounded-lg p-8 hover:bg-[#3a5a3f] transition-colors duration-300">
                  <h3 className="font-montserrat text-2xl font-medium text-[#e5e4e0] mb-4">
                    {service.title}
                  </h3>
                  <p className="font-montserrat text-[#e5e4e0]/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1a2d1e] text-[#e5e4e0] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-4xl font-light mb-8">
            Vamos criar algo extraordinário juntos?
          </h2>
          <p className="font-montserrat text-lg text-[#e5e4e0]/90 mb-8 leading-relaxed">
            Cada projeto é uma nova oportunidade de transformar ideias em 
            identidades visuais marcantes e autênticas.
          </p>
          <a 
            href="/contato"
            className="inline-block bg-[#e5e4e0] text-[#19271b] px-8 py-3 font-montserrat font-medium tracking-wide hover:bg-white transition-colors duration-300"
          >
            INICIAR CONVERSA
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sobre; 