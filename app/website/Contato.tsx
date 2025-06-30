
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Reset form
    setFormData({
      nome: '',
      email: '',
      instagram: '',
      atividade: '',
      servicos: '',
      comoSoube: ''
    });
  };

  return (
    <div className="bg-studio-beige">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl lg:text-6xl font-light text-studio-darkGray mb-8 animate-fade-in">
            Contato
          </h1>
          <p className="font-inter text-xl text-studio-mediumGray leading-relaxed animate-fade-in">
            Vamos conversar sobre seu projeto e transformar suas ideias em realidade
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Texto de convite */}
            <div className="lg:pr-8">
              <h2 className="font-playfair text-4xl font-light text-studio-darkGray mb-8">
                Vamos começar uma conversa?
              </h2>
              
              <div className="space-y-6 mb-12">
                <p className="font-inter text-lg text-studio-mediumGray leading-relaxed">
                  Cada projeto é único e merece nossa atenção personalizada. 
                  Compartilhe conosco os detalhes da sua marca e como podemos 
                  ajudar a criar uma identidade visual que seja verdadeiramente sua.
                </p>
                
                <p className="font-inter text-lg text-studio-mediumGray leading-relaxed">
                  Nosso processo começa com uma conversa honesta sobre seus 
                  objetivos, desafios e visão. A partir daí, desenvolvemos 
                  uma proposta personalizada que atenda às suas necessidades específicas.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-playfair text-xl font-medium text-studio-darkGray mb-2">
                    Tempo de resposta
                  </h3>
                  <p className="font-inter text-studio-mediumGray">
                    Respondemos todas as mensagens em até 24 horas úteis.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-playfair text-xl font-medium text-studio-darkGray mb-2">
                    Primeira conversa
                  </h3>
                  <p className="font-inter text-studio-mediumGray">
                    Oferecemos uma consulta inicial gratuita para entender seu projeto.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-studio-lightGray rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block font-inter text-sm font-medium text-studio-darkGray mb-2">
                    Nome *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-white border-studio-mediumGray/20 focus:border-studio-darkGray"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-inter text-sm font-medium text-studio-darkGray mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border-studio-mediumGray/20 focus:border-studio-darkGray"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="instagram" className="block font-inter text-sm font-medium text-studio-darkGray mb-2">
                    Instagram da sua marca
                  </label>
                  <Input
                    id="instagram"
                    name="instagram"
                    type="text"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full bg-white border-studio-mediumGray/20 focus:border-studio-darkGray"
                    placeholder="@suamarca"
                  />
                </div>

                <div>
                  <label htmlFor="atividade" className="block font-inter text-sm font-medium text-studio-darkGray mb-2">
                    O que sua marca faz ou oferece? *
                  </label>
                  <Textarea
                    id="atividade"
                    name="atividade"
                    required
                    value={formData.atividade}
                    onChange={handleChange}
                    className="w-full bg-white border-studio-mediumGray/20 focus:border-studio-darkGray"
                    placeholder="Descreva brevemente sua atividade ou produto..."
                    rows={3}
                  />
                </div>

                <div>
                  <label htmlFor="servicos" className="block font-inter text-sm font-medium text-studio-darkGray mb-2">
                    Em quais serviços você está interessado? *
                  </label>
                  <select
                    id="servicos"
                    name="servicos"
                    required
                    value={formData.servicos}
                    onChange={handleChange}
                    className="w-full bg-white border border-studio-mediumGray/20 rounded-md px-3 py-2 font-inter text-studio-darkGray focus:border-studio-darkGray focus:outline-none"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="naming">Naming</option>
                    <option value="identidade-visual">Identidade Visual</option>
                    <option value="registro-inpi">Registro INPI</option>
                    <option value="completo">Projeto Completo</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="comoSoube" className="block font-inter text-sm font-medium text-studio-darkGray mb-2">
                    Como você ficou sabendo sobre nós?
                  </label>
                  <select
                    id="comoSoube"
                    name="comoSoube"
                    value={formData.comoSoube}
                    onChange={handleChange}
                    className="w-full bg-white border border-studio-mediumGray/20 rounded-md px-3 py-2 font-inter text-studio-darkGray focus:border-studio-darkGray focus:outline-none"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="instagram">Instagram</option>
                    <option value="indicacao">Indicação</option>
                    <option value="google">Google</option>
                    <option value="site">Site</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-studio-black text-studio-beige hover:bg-studio-darkGray transition-colors duration-300 py-3"
                >
                  ENVIAR MENSAGEM
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="bg-studio-black text-studio-beige py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 text-center">
            <div>
              <h3 className="font-playfair text-2xl font-light mb-4">
                WhatsApp
              </h3>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-inter text-lg hover:text-white transition-colors duration-300"
              >
                +55 (11) 99999-9999
              </a>
            </div>
            
            <div>
              <h3 className="font-playfair text-2xl font-light mb-4">
                Instagram
              </h3>
              <a 
                href="https://instagram.com/authstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-inter text-lg hover:text-white transition-colors duration-300"
              >
                @authstudio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
