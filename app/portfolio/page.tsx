"use client"

const Portfolio = () => {
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
    <div className="bg-[#19271b] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-montserrat text-5xl lg:text-6xl font-light text-[#e5e4e0] mb-8">
            Portfólio
          </h1>
          <p className="font-montserrat text-xl text-[#e5e4e0]/80 leading-relaxed">
            Uma seleção cuidadosa dos nossos trabalhos mais representativos
          </p>
        </div>
      </section>

      {/* Projetos Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-[#2d4a32] rounded-lg aspect-square flex items-center justify-center hover:bg-[#3a5a3f] transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#e5e4e0] rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white transition-colors duration-300">
                      <span className="font-montserrat text-[#19271b] font-medium text-lg">
                        {client.logo}
                      </span>
                    </div>
                    <p className="font-montserrat text-sm text-[#e5e4e0]/80 group-hover:text-[#e5e4e0] transition-colors duration-300">
                      {client.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="bg-[#2d4a32] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="font-montserrat text-5xl font-light text-[#e5e4e0] mb-4">
                50+
              </div>
              <p className="font-montserrat text-[#e5e4e0]/80">
                Projetos Realizados
              </p>
            </div>
            <div>
              <div className="font-montserrat text-5xl font-light text-[#e5e4e0] mb-4">
                5
              </div>
              <p className="font-montserrat text-[#e5e4e0]/80">
                Anos de Experiência
              </p>
            </div>
            <div>
              <div className="font-montserrat text-5xl font-light text-[#e5e4e0] mb-4">
                100%
              </div>
              <p className="font-montserrat text-[#e5e4e0]/80">
                Clientes Satisfeitos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-montserrat text-4xl font-light text-[#e5e4e0] text-center mb-16">
            Nosso Processo
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Descoberta', description: 'Entendemos profundamente sua marca, valores e objetivos.' },
              { step: '02', title: 'Estratégia', description: 'Desenvolvemos uma direção criativa alinhada aos seus objetivos.' },
              { step: '03', title: 'Criação', description: 'Traduzimos a estratégia em elementos visuais impactantes.' },
              { step: '04', title: 'Entrega', description: 'Fornecemos todos os arquivos e orientações para aplicação.' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-montserrat text-3xl font-light text-[#e5e4e0]/60 mb-4">
                  {item.step}
                </div>
                <h3 className="font-montserrat text-xl font-medium text-[#e5e4e0] mb-4">
                  {item.title}
                </h3>
                <p className="font-montserrat text-[#e5e4e0]/80 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1a2d1e] text-[#e5e4e0] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-4xl font-light mb-8">
            Pronto para ser nosso próximo case de sucesso?
          </h2>
          <p className="font-montserrat text-lg text-[#e5e4e0]/90 mb-8 leading-relaxed">
            Vamos conversar sobre como podemos transformar sua marca através do design.
          </p>
          <a 
            href="/contato"
            className="inline-block bg-[#e5e4e0] text-[#19271b] px-8 py-3 font-montserrat font-medium tracking-wide hover:bg-white transition-colors duration-300"
          >
            INICIAR PROJETO
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 