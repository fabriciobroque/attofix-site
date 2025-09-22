import React from "react";
import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Footer from "@/components/Footer";


function App() {
return (
<div className="font-sans text-gray-800">
<Header />
<Hero />
<Services />
<About />
<Footer />
</div>
);
}


export default App;