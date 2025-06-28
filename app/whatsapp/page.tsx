import Link from "next/link"
import Navigation from "@/components/navigation"

export default function WhatsAppPage() {
  return (
    <div className="min-h-screen bg-[#19271b] flex flex-col relative">
      {/* Textura Granulada */}
      <div className="absolute inset-0 opacity-30 pointer-events-none grain-texture"></div>

      <Navigation position="top" />

      <main className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[#e5e4e0] text-4xl md:text-6xl font-black-mango font-thin tracking-[0.3em] mb-8">
            WHATSAPP
          </h1>

          <div className="space-y-6 text-[#e5e4e0] font-montserrat font-thin">
            <p className="text-lg md:text-xl leading-relaxed">
              Entre em contato conosco diretamente pelo WhatsApp para uma conversa personalizada.
            </p>

            <div className="mt-12 p-8 border border-[#e5e4e0]/20 rounded-lg">
              <h3 className="text-2xl font-black-mango tracking-wider mb-6">FALE CONOSCO</h3>
              <p className="text-lg mb-6">Estamos prontos para transformar suas ideias em realidade.</p>

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#e5e4e0] text-[#19271b] font-montserrat font-thin tracking-wider hover:bg-[#e5e4e0]/80 transition-all duration-300"
              >
                INICIAR CONVERSA
              </a>
            </div>
          </div>

          <Link
            href="/"
            className="inline-block mt-12 px-8 py-3 border border-[#e5e4e0] text-[#e5e4e0] font-montserrat font-thin tracking-wider hover:bg-[#e5e4e0] hover:text-[#19271b] transition-all duration-300"
          >
            VOLTAR
          </Link>
        </div>
      </main>

      <Navigation position="bottom" />
    </div>
  )
}
