import React from "react";
import Hero from "./screens/hero";
import ServicesAndthings from "./screens/servicesAndthings";
import Footer from "./components/footer";
import './styles/index.css'

function App() {
  return (
    <div>
      <Hero/>
      <ServicesAndthings/>
      <Footer/>
    </div>
  );
}

export default App;
