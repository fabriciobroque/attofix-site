import React from "react";

export default function Hero() {
  return (
    <section className="px-8 py-10 bg-brand-gray">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Texto lado esquerdo */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-teal mb-4">
            Seu lar, pronto em um instante.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Pequenos reparos ou grandes soluções, a AttoFix cuida de tudo para você.
          </p>
          <button className="bg-brand-orange hover:bg-brand-teal text-white text-lg px-6 py-3 rounded shadow-lg transition-transform hover:scale-105"
            onClick={() => {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Solicitar Orçamento Agora
          </button>
        </div>

        {/* Imagem lado direito */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/src/assets/hero.png"  // coloque a imagem na pasta public/
            alt="Profissional AttoFix com furadeira" 
            className="max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}
