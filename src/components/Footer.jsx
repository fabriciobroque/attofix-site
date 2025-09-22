import React from "react";
import ContactForm from "@/components/ContactForm";

export default function Footer() {
  return (
    <footer id="contact" className="px-8 py-16 bg-brand-teal text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Coluna Esquerda */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar seu espaço?</h2>
          <p className="mb-4">(41) 99531-7960 | contato@attofix.com</p>
          <div className="flex space-x-4">
            {/* <a href="#" className="hover:text-brand-orange transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Facebook</a> */}
            <a
            href="https://wa.me/5541995317960?text=Olá, gostaria de pedir um orçamento com a AttoFix."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Coluna Direita: Formulário */}
        <ContactForm />
      </div>
    </footer>
  );
}
