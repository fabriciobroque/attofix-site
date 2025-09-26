import React from "react";
import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";


function App() {
return (
<div className="font-sans text-gray-800">
<GoogleAnalytics />
<Header />
<Hero />
<Services />
<About />
<Footer />
</div>
);
}


export default App; 