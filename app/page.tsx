import Image from "next/image"
import Navigation from "@/components/navigation"

export default function AuthStudioBio() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* BG da página */}
      <Image
        src="/images/bglume.JPG"
        alt="Background Lume Studio"
        fill
        className="object-cover object-center z-0"
        priority
      />
      {/* Geometric Elements */}
      <div className="geometric-circle top-20 left-10 floating-element"></div>
      <div className="geometric-circle bottom-32 right-16 floating-element-delayed"></div>
      <div className="geometric-circle top-1/3 right-1/4 floating-element opacity-50"></div>

      {/* Corner Elements */}

      {/* Top Navigation */}
      <Navigation position="top" />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-0 relative z-10" style={{ minHeight: '0', height: '12vh' }}>
        {/* Logo LUME - Alta Qualidade */}
        <div className="text-center">
          <div className="mx-auto px-0">
            <Image
              src="/images/lume-logo-hq.png"
              alt="Lume Estúdio + Agência"
              width={400}
              height={300}
              className="w-full max-w-lg h-auto filter brightness-0 invert"
              priority
            />
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <Navigation position="bottom" />
    </div>
  )
}
