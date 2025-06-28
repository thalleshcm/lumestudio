import Image from "next/image"
import Navigation from "@/components/navigation"

export default function AuthStudioBio() {
  return (
    <div className="min-h-screen gradient-bg flex flex-col relative overflow-hidden">
      {/* Geometric Elements */}
      <div className="geometric-circle top-20 left-10 floating-element"></div>
      <div className="geometric-circle bottom-32 right-16 floating-element-delayed"></div>
      <div className="geometric-circle top-1/3 right-1/4 floating-element opacity-50"></div>

      {/* Corner Elements */}

      {/* Top Navigation */}
      <Navigation position="top" />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        {/* Logo LUME - Alta Qualidade */}
        <div className="text-center">
          <div className="max-w-6xl mx-auto px-4">
            <Image
              src="/images/lume-logo-hq.png"
              alt="Lume Estúdio + Agência"
              width={1200}
              height={900}
              className="w-full h-auto filter brightness-0 invert"
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
