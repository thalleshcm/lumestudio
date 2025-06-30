import Link from "next/link"

export default function NotFound() {
  return (
    <div className="bg-[#19271b] min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="font-montserrat text-6xl lg:text-8xl font-light text-[#e5e4e0] mb-8">
          404
        </h1>
        <h2 className="font-montserrat text-2xl lg:text-3xl font-light text-[#e5e4e0] mb-6">
          Página não encontrada
        </h2>
        <p className="font-montserrat text-lg text-[#e5e4e0]/80 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link 
          href="/"
          className="inline-block bg-[#e5e4e0] text-[#19271b] px-8 py-3 font-montserrat font-medium tracking-wide hover:bg-white transition-colors duration-300"
        >
          VOLTAR AO INÍCIO
        </Link>
      </div>
    </div>
  )
} 