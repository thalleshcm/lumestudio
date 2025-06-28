import Link from "next/link"
import Navigation from "@/components/navigation"

export default function RegistroINPIPage() {
  return (
    <div className="min-h-screen bg-[#19271b] flex flex-col relative">
      {/* Textura Granulada */}
      <div className="absolute inset-0 opacity-30 pointer-events-none grain-texture"></div>

      <Navigation position="top" />

      <main className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[#e5e4e0] text-4xl md:text-6xl font-black-mango font-thin tracking-[0.3em] mb-8">
            REGISTRO INPI
          </h1>

          <div className="space-y-6 text-[#e5e4e0] font-montserrat font-thin">
            <p className="text-lg md:text-xl leading-relaxed">
              Proteja sua marca com nosso serviço especializado de registro no INPI.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 border border-[#e5e4e0]/20 rounded-lg">
                <h3 className="text-lg font-black-mango tracking-wider mb-4">CONSULTORIA</h3>
                <p className="text-sm leading-relaxed">Análise completa da viabilidade do seu registro.</p>
              </div>

              <div className="p-6 border border-[#e5e4e0]/20 rounded-lg">
                <h3 className="text-lg font-black-mango tracking-wider mb-4">PROCESSO</h3>
                <p className="text-sm leading-relaxed">Acompanhamento total do processo junto ao INPI.</p>
              </div>

              <div className="p-6 border border-[#e5e4e0]/20 rounded-lg">
                <h3 className="text-lg font-black-mango tracking-wider mb-4">PROTEÇÃO</h3>
                <p className="text-sm leading-relaxed">Garantia legal para sua marca e identidade.</p>
              </div>
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
