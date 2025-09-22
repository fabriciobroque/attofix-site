import React from "react";


export default function Services() {
return (
<section id="services" className="px-8 py-16 bg-white text-center">
<h2 className="text-3xl font-bold text-brand-teal mb-12">Serviços</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 shadow-md rounded-xl bg-brand-gray hover:shadow-xl transition-shadow">
<span className="text-5xl">🔧</span>
<h3 className="text-xl font-semibold mt-4 text-brand-teal">Manutenção Predial</h3>
<p className="text-gray-600 mt-2">Serviços rápidos e confiáveis para manter seu espaço em ordem.</p>
</div>
<div className="p-6 shadow-md rounded-xl bg-brand-gray hover:shadow-xl transition-shadow">
<span className="text-5xl">🏠</span>
<h3 className="text-xl font-semibold mt-4 text-brand-teal">Reformas</h3>
<p className="text-gray-600 mt-2">Transformamos ambientes com qualidade e eficiência.</p>
</div>
<div className="p-6 shadow-md rounded-xl bg-brand-gray hover:shadow-xl transition-shadow">
<span className="text-5xl">🛋️</span>
<h3 className="text-xl font-semibold mt-4 text-brand-teal">Móveis sob medida</h3>
<p className="text-gray-600 mt-2">Design personalizado para valorizar seu lar ou escritório.</p>
</div>
</div>
</section>
);
}