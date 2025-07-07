"use client";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login fixo para protótipo
    if (email === "admin@site.com" && password === "admin123") {
      window.location.href = "/admin";
    } else {
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E7E6E2]">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow w-full max-w-sm flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Login Admin</h1>
        <input
          type="email"
          placeholder="E-mail"
          className="border p-2 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="border p-2 rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button type="submit" className="bg-[#19271b] text-white py-2 rounded font-bold">Entrar</button>
      </form>
    </div>
  );
} 