"use client";
import { useState } from "react";

const imagensMock = [
  {
    id: "banner-hero",
    label: "Banner Principal (Hero)",
    path: "leticia/prancheta.jpg",
  },
  {
    id: "session-1",
    label: "Sessão Letícia 1",
    path: "leticia/sessionleticia.jpg",
  },
  {
    id: "session-2",
    label: "Sessão Letícia 2",
    path: "leticia/sessionleticia_2.jpg",
  },
  {
    id: "session-3",
    label: "Sessão Letícia 3",
    path: "leticia/sessionleticia_3.jpg",
  },
];

export default function AdminImages() {
  const [imagens, setImagens] = useState(imagensMock);
  const [uploading, setUploading] = useState<string | null>(null);

  const handleUpload = async (id: string, file: File) => {
    setUploading(id);
    const path = `${imagens.find(img => img.id === id)?.path || file.name}`;
    // Removi todas as chamadas e usos do supabase neste arquivo.
    setUploading(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gerenciar Imagens do Site</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {imagens.map(img => (
          <div key={img.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
            <div className="mb-2 font-semibold">{img.label}</div>
            <img src={`/images/${img.path}`} alt={img.label} className="w-full h-40 object-cover rounded mb-4 border" />
            <label className="bg-[#19271b] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#314d2b] transition">
              {uploading === img.id ? "Enviando..." : "Substituir Imagem"}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                disabled={!!uploading}
                onChange={e => {
                  if (e.target.files && e.target.files[0]) {
                    handleUpload(img.id, e.target.files[0]);
                  }
                }}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
} 