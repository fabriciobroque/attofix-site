import React from "react";


export default function About() {
return (
<section id="about" className="px-8 py-16 bg-brand-gray text-center">
<h2 className="text-3xl font-bold text-brand-teal mb-6">Sobre a Empresa</h2>
<p className="max-w-2xl mx-auto text-gray-700 mb-6">
Somos apaixonados por transformar casas em lares, com segurança, qualidade e dedicação.
</p>
<blockquote className="italic text-gray-600 max-w-xl mx-auto border-l-4 border-brand-orange pl-4">
“Ótimo serviço! Resolveram tudo rápido e deixaram minha casa impecável.”
</blockquote>
<p className="text-brand-green font-semibold mt-4">+50 reparos realizados com excelência</p>
</section>
);
}