import Link from "next/link"
import Image from "next/image"

export default function WebsitePage() {
  return (
    <div className="min-h-screen bg-[#19271b] relative">
      {/* Textura Granulada */}
      <div className="absolute inset-0 opacity-30 pointer-events-none grain-texture"></div>

      {/* Header */}
      <header className="bg-transparent px-8 py-8 flex justify-between items-center relative z-20">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/lume-logo-hq.png"
            alt="Lume Estúdio + Agência"
            width={200}
            height={150}
            className="h-20 w-auto filter brightness-0 invert"
            priority
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex space-x-8">
          <Link
            href="/"
            className="text-[#e5e4e0] text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300"
          >
            HOME
          </Link>
          <Link
            href="/sobre"
            className="text-[#e5e4e0] text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300"
          >
            SOBRE
          </Link>
          <Link
            href="/portfolio"
            className="text-[#e5e4e0] text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300"
          >
            PORTFÓLIO
          </Link>
          <Link
            href="/contato"
            className="text-[#e5e4e0] text-sm font-montserrat font-thin tracking-wider hover:opacity-70 transition-opacity duration-300"
          >
            CONTATO
          </Link>
        </nav>
      </header>

      {/* Main Content - Hero Section Full Width */}
      <main className="relative z-10">
        <div className="relative w-full">
          {/* Hero Image - Full Width */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] w-full">
            <Image
              src="/images/hero-plants.jpeg"
              alt="Plantas tropicais - Lume Estúdio"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Logo overlay on image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-md">
                <Image
                  src="/images/lume-logo-hq.png"
                  alt="Lume Estúdio + Agência"
                  width={400}
                  height={300}
                  className="w-full h-auto filter brightness-0 invert drop-shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
