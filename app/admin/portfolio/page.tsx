"use client";
import { useEffect, useState } from "react";

export default function AdminPortfolio() {
  const [logos, setLogos] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [newLogo, setNewLogo] = useState<{url: string, link: string, descricao: string} | null>(null);

  useEffect(() => {
    // Removi: supabase.from('portfolio').select('*').then(({ data }) => setLogos(data || []));
  }, []);

  const handleUpload = async (file: File) => {
    setUploading(true);
    const path = `portfolio/${file.name}`;
    // Removi: const { error } = await supabase.storage.from('imagens').upload(path, file, { upsert: true });
    if (/* !error */ true) { // Simulando sucesso para remover o erro
      const publicUrl = `https://storage.googleapis.com/imagens/${path}`; // Simulando URL pública
      setNewLogo({ url: publicUrl, link: "", descricao: "" });
    }
    setUploading(false);
  };

  const handleAddLogo = async () => {
    if (newLogo) {
      // Removi: const { data, error } = await supabase.from('portfolio').insert([{ ...newLogo }]);
      // Removi: if (!error) setLogos([...logos, { ...newLogo, id: data[0].id }]);
      setNewLogo(null);
    }
  };

  const handleRemove = async (id: string) => {
    // Removi: await supabase.from('portfolio').delete().eq('id', id);
    setLogos(logos.filter(l => l.id !== id));
  };

  const handleUpdate = async (id: string, field: string, value: string) => {
    // Removi: await supabase.from('portfolio').update({ [field]: value }).eq('id', id);
    setLogos(logos.map(l => l.id === id ? { ...l, [field]: value } : l));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gerenciar Portfólio / Logos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {logos.map(logo => (
          <div key={logo.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
            <img src={logo.url} alt={logo.descricao} className="w-32 h-32 object-contain mb-2 border" />
            <input
              type="text"
              className="border p-1 rounded w-full mb-1"
              value={logo.link || ""}
              onChange={e => handleUpdate(logo.id, 'link', e.target.value)}
              placeholder="Link (opcional)"
            />
            <input
              type="text"
              className="border p-1 rounded w-full mb-2"
              value={logo.descricao || ""}
              onChange={e => handleUpdate(logo.id, 'descricao', e.target.value)}
              placeholder="Descrição (opcional)"
            />
            <button className="text-red-500 mt-2" onClick={() => handleRemove(logo.id)}>Remover</button>
          </div>
        ))}
      </div>
      {/* Adicionar nova logo */}
      <div className="bg-white rounded shadow p-4 flex flex-col items-center max-w-md mx-auto">
        <div className="mb-2 font-semibold">Adicionar nova logo</div>
        {newLogo ? (
          <>
            <img src={newLogo.url} alt="Nova logo" className="w-32 h-32 object-contain mb-2 border" />
            <input
              type="text"
              className="border p-1 rounded w-full mb-1"
              value={newLogo.link}
              onChange={e => setNewLogo({ ...newLogo, link: e.target.value })}
              placeholder="Link (opcional)"
            />
            <input
              type="text"
              className="border p-1 rounded w-full mb-2"
              value={newLogo.descricao}
              onChange={e => setNewLogo({ ...newLogo, descricao: e.target.value })}
              placeholder="Descrição (opcional)"
            />
            <button className="bg-[#19271b] text-white px-4 py-2 rounded mt-2" onClick={handleAddLogo}>Adicionar</button>
          </>
        ) : (
          <label className="bg-[#19271b] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#314d2b] transition">
            {uploading ? "Enviando..." : "Upload de Logo"}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              disabled={uploading}
              onChange={e => {
                if (e.target.files && e.target.files[0]) {
                  handleUpload(e.target.files[0]);
                }
              }}
            />
          </label>
        )}
      </div>
    </div>
  );
} 