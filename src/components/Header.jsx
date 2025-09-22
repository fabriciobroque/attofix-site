import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="logo1.png"  // coloque a imagem na pasta public/
          alt="AttoFix Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Menu Desktop */}
      <nav className="hidden md:flex space-x-6">
        <a href="#services" className="hover:text-brand-green">Serviços</a>
        <a href="#about" className="hover:text-brand-green">Sobre</a>
        <a href="#contact" className="hover:text-brand-green">Contato</a>
      </nav>

      {/* Botão Desktop */}
      <button
        onClick={() =>
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
        }
        className="hidden md:block bg-brand-orange hover:bg-brand-teal text-white px-4 py-2 rounded"
      >
        Pedir Orçamento
      </button>

      {/* Botão Menu Mobile */}
      <button
        className="md:hidden text-brand-teal focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay escuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Menu Mobile */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 transform transition-all duration-300 origin-top z-50 ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <a
          href="#services"
          className="text-lg text-brand-teal hover:text-brand-green"
          onClick={() => setIsOpen(false)}
        >
          Serviços
        </a>
        <a
          href="#about"
          className="text-lg text-brand-teal hover:text-brand-green"
          onClick={() => setIsOpen(false)}
        >
          Sobre
        </a>
        <a
          href="#contact"
          className="text-lg text-brand-teal hover:text-brand-green"
          onClick={() => setIsOpen(false)}
        >
          Contato
        </a>

        {/* Botão Mobile */}
        <button
          className="bg-brand-orange hover:bg-brand-teal text-white px-4 py-2 rounded"
          onClick={() => {
            setIsOpen(false);
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Pedir Orçamento
        </button>
      </div>
    </header>
  );
}
