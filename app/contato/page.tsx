"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    instagram: '',
    atividade: '',
    servicos: '',
    comoSoube: ''
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ nome: '', email: '', instagram: '', atividade: '', servicos: '', comoSoube: '' });
  };

  return (
    <div className="bg-[#19271b] min-h-screen">
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

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-montserrat text-5xl lg:text-6xl font-light text-[#e5e4e0] mb-8">
            Contato
          </h1>
          <p className="font-montserrat text-xl text-[#e5e4e0]/80 leading-relaxed">
            Vamos conversar sobre seu projeto e transformar suas ideias em realidade
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:pr-8">
              <h2 className="font-montserrat text-4xl font-light text-[#e5e4e0] mb-8">
                Vamos começar uma conversa?
              </h2>
              <div className="space-y-6 mb-12">
                <p className="font-montserrat text-lg text-[#e5e4e0]/80 leading-relaxed">
                  Cada projeto é único e merece nossa atenção personalizada. 
                  Compartilhe conosco os detalhes da sua marca e como podemos 
                  ajudar a criar uma identidade visual que seja verdadeiramente sua.
                </p>
              </div>
            </div>

            <div className="bg-[#2d4a32] rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block font-montserrat text-sm font-medium text-[#e5e4e0] mb-2">
                    Nome *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-[#19271b] border-[#e5e4e0]/20 focus:border-[#e5e4e0] text-[#e5e4e0]"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-montserrat text-sm font-medium text-[#e5e4e0] mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#19271b] border-[#e5e4e0]/20 focus:border-[#e5e4e0] text-[#e5e4e0]"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="atividade" className="block font-montserrat text-sm font-medium text-[#e5e4e0] mb-2">
                    O que sua marca faz ou oferece? *
                  </label>
                  <Textarea
                    id="atividade"
                    name="atividade"
                    required
                    value={formData.atividade}
                    onChange={handleChange}
                    className="w-full bg-[#19271b] border-[#e5e4e0]/20 focus:border-[#e5e4e0] text-[#e5e4e0]"
                    placeholder="Descreva brevemente sua atividade ou produto..."
                    rows={3}
                  />
                </div>

                <div>
                  <label htmlFor="servicos" className="block font-montserrat text-sm font-medium text-[#e5e4e0] mb-2">
                    Em quais serviços você está interessado? *
                  </label>
                  <select
                    id="servicos"
                    name="servicos"
                    required
                    value={formData.servicos}
                    onChange={handleChange}
                    className="w-full bg-[#19271b] border border-[#e5e4e0]/20 rounded-md px-3 py-2 font-montserrat text-[#e5e4e0] focus:border-[#e5e4e0] focus:outline-none"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="naming">Naming</option>
                    <option value="identidade-visual">Identidade Visual</option>
                    <option value="registro-inpi">Registro INPI</option>
                    <option value="completo">Projeto Completo</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#e5e4e0] text-[#19271b] hover:bg-white font-montserrat font-medium"
                >
                  ENVIAR MENSAGEM
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contato; 