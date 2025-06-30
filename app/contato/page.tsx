"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    instagram: '',
    atividade: '',
    servicos: '',
    comoSoube: ''
  });

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
    </div>
  );
};

export default Contato; 