"use client";
import { useEffect, useState } from "react";

export default function AdminPages() {
  const [pages, setPages] = useState<any[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [newPage, setNewPage] = useState<{titulo: string, conteudo: string} | null>(null);

  useEffect(() => {
    // Removi todas as chamadas e usos do supabase neste arquivo.
  }, []);

  const handleSave = async (id: string, titulo: string, conteudo: string) => {
    // Removi todas as chamadas e usos do supabase neste arquivo.
    setPages(pages.map(p => p.id === id ? { ...p, titulo, conteudo } : p));
    setEditing(null);
  };

  const handleDelete = async (id: string) => {
    // Removi todas as chamadas e usos do supabase neste arquivo.
    setPages(pages.filter(p => p.id !== id));
  };

  const handleAdd = async () => {
    if (newPage && newPage.titulo) {
      // Removi todas as chamadas e usos do supabase neste arquivo.
      setPages([...pages, { ...newPage, id: "new_id" }]); // Placeholder for new ID
      setNewPage(null);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gerenciar Páginas de Conteúdo</h1>
      <div className="mb-8">
        <button className="bg-[#19271b] text-white px-4 py-2 rounded" onClick={() => setNewPage({ titulo: "", conteudo: "" })}>Nova Página</button>
      </div>
      {/* Lista de páginas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {pages.map(page => (
          <div key={page.id} className="bg-white rounded shadow p-4">
            {editing === page.id ? (
              <>
                <input
                  type="text"
                  className="border p-1 rounded w-full mb-2"
                  value={page.titulo}
                  onChange={e => setPages(pages.map(p => p.id === page.id ? { ...p, titulo: e.target.value } : p))}
                  placeholder="Título da página"
                />
                <textarea
                  className="border p-1 rounded w-full mb-2 min-h-[100px]"
                  value={page.conteudo.replace(/<[^>]+>/g, "")}
                  onChange={e => setPages(pages.map(p => p.id === page.id ? { ...p, conteudo: e.target.value } : p))}
                  placeholder="Conteúdo (HTML ou texto simples)"
                />
                <button className="bg-[#19271b] text-white px-4 py-2 rounded mr-2" onClick={() => handleSave(page.id, page.titulo, page.conteudo)}>Salvar</button>
                <button className="text-red-500" onClick={() => setEditing(null)}>Cancelar</button>
              </>
            ) : (
              <>
                <h2 className="font-bold text-xl mb-2">{page.titulo}</h2>
                <div className="mb-2 text-gray-700" dangerouslySetInnerHTML={{ __html: page.conteudo }} />
                <button className="bg-[#19271b] text-white px-4 py-1 rounded mr-2" onClick={() => setEditing(page.id)}>Editar</button>
                <button className="text-red-500" onClick={() => handleDelete(page.id)}>Excluir</button>
              </>
            )}
          </div>
        ))}
      </div>
      {/* Nova página */}
      {newPage && (
        <div className="bg-white rounded shadow p-4 max-w-lg mx-auto mb-8">
          <input
            type="text"
            className="border p-1 rounded w-full mb-2"
            value={newPage.titulo}
            onChange={e => setNewPage({ ...newPage, titulo: e.target.value })}
            placeholder="Título da página"
          />
          <textarea
            className="border p-1 rounded w-full mb-2 min-h-[100px]"
            value={newPage.conteudo}
            onChange={e => setNewPage({ ...newPage, conteudo: e.target.value })}
            placeholder="Conteúdo (HTML ou texto simples)"
          />
          <button className="bg-[#19271b] text-white px-4 py-2 rounded mr-2" onClick={handleAdd}>Adicionar</button>
          <button className="text-red-500" onClick={() => setNewPage(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
} 