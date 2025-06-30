
const Sobre = () => {
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
    <div className="bg-studio-beige">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl lg:text-6xl font-light text-studio-darkGray mb-8 animate-fade-in">
            Sobre o Auth Studio
          </h1>
          <p className="font-inter text-xl text-studio-mediumGray leading-relaxed animate-fade-in">
            Um estúdio dedicado à criação de identidades visuais autênticas e atemporais
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-light text-studio-darkGray mb-8">
                Nossa História
              </h2>
              <div className="space-y-6">
                <p className="font-inter text-lg text-studio-mediumGray leading-relaxed">
                  O Auth Studio nasceu da crença de que o design verdadeiramente 
                  impactante não precisa ser complexo. Em um mundo saturado de 
                  informação visual, escolhemos o caminho da simplicidade elegante.
                </p>
                <p className="font-inter text-lg text-studio-mediumGray leading-relaxed">
                  Nossa jornada começou com uma pergunta simples: como podemos 
                  criar marcas que sejam tanto memoráveis quanto atemporais? 
                  A resposta estava na intersecção entre estratégia e minimalismo.
                </p>
                <p className="font-inter text-lg text-studio-mediumGray leading-relaxed">
                  Cada projeto é uma oportunidade de descobrir a essência única 
                  de uma marca e traduzi-la em elementos visuais que comunicam 
                  de forma direta e autêntica.
                </p>
              </div>
            </div>
            
            <div 
              className="aspect-[4/5] bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&h=750&fit=crop)',
              }}
            />
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="bg-studio-lightGray py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-light text-studio-darkGray mb-12">
            Nossa Filosofia
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-playfair text-2xl font-medium text-studio-darkGray mb-4">
                Simplicidade
              </h3>
              <p className="font-inter text-studio-mediumGray leading-relaxed">
                A verdadeira sofisticação está na capacidade de comunicar 
                muito através de pouco. Cada elemento tem propósito.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-medium text-studio-darkGray mb-4">
                Autenticidade
              </h3>
              <p className="font-inter text-studio-mediumGray leading-relaxed">
                Cada marca tem uma personalidade única. Nosso papel é 
                descobri-la e traduzi-la visualmente de forma genuína.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-medium text-studio-darkGray mb-4">
                Atemporalidade
              </h3>
              <p className="font-inter text-studio-mediumGray leading-relaxed">
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
          <h2 className="font-playfair text-4xl font-light text-studio-darkGray text-center mb-16">
            Nossos Serviços
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-studio-lightGray rounded-lg p-8 hover-lift">
                  <h3 className="font-playfair text-2xl font-medium text-studio-darkGray mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-studio-mediumGray leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-studio-black text-studio-beige py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-light mb-8">
            Vamos criar algo extraordinário juntos?
          </h2>
          <p className="font-inter text-lg text-studio-beige/90 mb-8 leading-relaxed">
            Cada projeto é uma nova oportunidade de transformar ideias em 
            identidades visuais marcantes e autênticas.
          </p>
          <a 
            href="/contato"
            className="inline-block bg-studio-beige text-studio-black px-8 py-3 font-inter font-medium tracking-wide hover:bg-white transition-colors duration-300"
          >
            INICIAR CONVERSA
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
