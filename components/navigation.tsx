import Link from "next/link"

interface NavigationProps {
  position: "top" | "bottom"
}

export default function Navigation({ position }: NavigationProps) {
  const topLinks = [
    { href: "/website", label: "WEBSITE" },
    { href: "https://wa.me/5531987625736?text=Ol%C3%A1!%20Vi%20o%20trabalho%20de%20voc%C3%AAs%20no%20site%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20para%20um%20or%C3%A7amento", label: "WHATSAPP" },
    { href: "/registro-inpi", label: "REGISTRO INPI" },
  ]

  const bottomLinks = [
    { href: "/facebook", label: "FACEBOOK" },
    { href: "/pinterest", label: "PINTEREST" },
    { href: "/behance", label: "BEHANCE" },
  ]

  const links = position === "top" ? topLinks : bottomLinks

  return (
    <nav className="flex justify-between items-center px-8 py-6 md:px-16 md:py-8 relative z-20">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-[#e5e4e0] text-sm md:text-base font-montserrat font-thin text-spaced hover:opacity-70 hover:text-ultra-spaced transition-all duration-500 relative group"
        >
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#e5e4e0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  )
}
