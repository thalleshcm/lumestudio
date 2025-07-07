import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 h-screen bg-[#19271b] text-white flex flex-col">
        <div className="p-6 font-bold text-2xl">Admin</div>
        <nav className="flex-1 flex flex-col gap-4 p-4">
          <Link href="/admin/images">Imagens</Link>
          <Link href="/admin/portfolio">Portfólio</Link>
          <Link href="/admin/pages">Páginas</Link>
          <button className="mt-auto text-red-400 text-left">Sair</button>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-[#f8f8f8]">{children}</main>
    </div>
  );
} 