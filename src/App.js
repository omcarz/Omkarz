import React from "react";
import Hero from "./screens/hero";
import Availablecars from "./screens/availablecars";
import './styles/index.css'
import Whychooseus from "./screens/whychooseus";
import Route from "./screens/route";
import Review from "./screens/review";

function App() {
  return (
    <div>
      <Hero />
      <Availablecars />
      <Whychooseus />
      <Route />
      <Review />
    </div>
  );
}

export default App;
