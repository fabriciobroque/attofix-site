import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Número da AttoFix com DDI (55 = Brasil)
    const phoneNumber = "5541995317960"; 
    const text = `Olá, meu nome é ${name}. Gostaria de pedir um orçamento para: ${service}. Mensagem: ${message}`;

    // Gera link do WhatsApp com mensagem
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg p-6 rounded-lg space-y-4 text-gray-800"
    >
      <h3 className="text-xl font-bold text-brand-teal">Peça seu orçamento</h3>

      <input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-green"
        required
      />

      <input
        type="text"
        placeholder="Serviço desejado"
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-green"
        required
      />

      <textarea
        placeholder="Mensagem adicional"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-green"
        rows="4"
      />

      <button
        type="submit"
        className="bg-brand-orange hover:bg-brand-teal text-white font-semibold px-4 py-2 rounded w-full transition-colors"
      >
        Enviar via WhatsApp
      </button>
    </form>
  );
}
