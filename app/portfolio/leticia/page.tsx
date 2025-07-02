"use client"

import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    id: 1,
    title: "Identidade Visual",
    description: "Desenvolvimento completo da marca com foco na elegância e profissionalismo.",
    image: "/images/leticia/elementosleticia.jpg",
    category: "Branding"
  },
  {
    id: 2,
    title: "Design Gráfico",
    description: "Materiais gráficos desenvolvidos com foco na excelência e detalhes.",
    image: "/images/leticia/elementosleticia_6.jpg",
    category: "Design Gráfico"
  },
  {
    id: 3,
    title: "Produto",
    description: "Rótulos e embalagens desenvolvidos para produtos exclusivos.",
    image: "/images/leticia/elementosleticia_2.jpg",
    category: "Produto"
  },
  {
    id: 4,
    title: "Logo Design",
    description: "Criação de logotipo exclusivo e sofisticado para a marca.",
    image: "/images/leticia/elementosleticia_3.jpg",
    category: "Logo Design"
  },
  {
    id: 5,
    title: "Aplicação",
    description: "Aplicação da identidade visual em brindes e materiais promocionais.",
    image: "/images/leticia/elementosleticia_4.jpg",
    category: "Aplicação"
  },
  {
    id: 6,
    title: "Digital",
    description: "Peças digitais para redes sociais e divulgação online.",
    image: "/images/leticia/elementosleticia_5.jpg",
    category: "Digital"
  }
];

const LeticiaPortfolio = () => {
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
      <section className="py-20 px-4 md:px-8 flex flex-col items-center justify-center min-h-[70vh]" style={{background: "linear-gradient(135deg, #eab7a6 0%, #eab7a6 100%, #eab7a6 100%)"}}>
        <div className="max-w-3xl mx-auto text-center">
          <img src="/images/logoleticia.png" alt="Logo Letícia" className="h-32 md:h-40 w-auto mx-auto mb-8" />
          <p className="text-lg md:text-xl text-white/90 font-montserrat">Especializada em odontologia estética, oferecendo tratamentos personalizados com foco na excelência e cuidado individualizado.</p>
          <button
            onClick={() => {
              const section = document.getElementById('portfolio-section');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-[#eab7a6] font-semibold px-8 py-3 rounded-full shadow hover:bg-[#ffe5dc] transition-colors text-lg mb-8 mt-12"
          >
            Ver Portfólio
          </button>
          <div className="text-white text-2xl animate-bounce mt-8">↓</div>
        </div>
      </section>

      {/* Nova Seção Portfólio Profissional */}
      <section id="portfolio-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#181F2C] mb-2">Portfólio</h2>
            <p className="text-lg md:text-xl text-[#3a4a54] mb-4">Projetos desenvolvidos com foco na excelência e atenção aos detalhes</p>
            <div className="w-24 h-1 mx-auto rounded" style={{ background: '#EBA37F' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card
                key={item.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-coral/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 text-coral px-3 py-1 rounded-full text-sm font-medium z-10">
                      {item.category}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#222] mb-16 font-montserrat tracking-wide">Projetos Realizados</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#222] font-montserrat">Identidade Visual</h3>
              <p className="text-[#666] leading-relaxed">
                Criação de logo, paleta de cores, tipografia e diretrizes de marca 
                que refletem a essência e valores do negócio da Letícia.
              </p>
              <ul className="space-y-2 text-[#666]">
                <li>• Logo principal e variações</li>
                <li>• Paleta de cores personalizada</li>
                <li>• Tipografia exclusiva</li>
                <li>• Manual de identidade visual</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#222] font-montserrat">Material Impresso</h3>
              <p className="text-[#666] leading-relaxed">
                Desenvolvimento de cartões de visita, papelaria corporativa e 
                materiais promocionais com acabamento premium.
              </p>
              <ul className="space-y-2 text-[#666]">
                <li>• Cartões de visita</li>
                <li>• Papel timbrado</li>
                <li>• Envelopes personalizados</li>
                <li>• Materiais promocionais</li>
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
              <h3 className="text-2xl font-bold text-[#222] mb-2">+150%</h3>
              <p className="text-[#666]">Aumento no reconhecimento da marca</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#222] mb-2">+80%</h3>
              <p className="text-[#666]">Melhoria na percepção profissional</p>
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

export default LeticiaPortfolio; 