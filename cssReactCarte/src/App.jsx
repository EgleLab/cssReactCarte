import { useState } from 'react';
import './App.css';
import Home from "./pages/Home";
import Card from "./pages/Card";
import CardMom from "./pages/CardMom";


function App() {
  const [currentLocation, setCurrentLocation] = useState("/");

  return (
    <>
       <nav>
          <button onClick={() => setCurrentLocation("/Card")} type="button">
            Get your card!
          </button>
          <button onClick={() => setCurrentLocation("/CardMom")} type="button">
            Get another for your mom 
          </button>
       </nav>
      <main>
          {currentLocation === "/" && <Home />}
          {currentLocation === "/Card" && <Card />}
          {currentLocation === "/CardMom" && <CardMom/>}
      </main>
    </>
  )
}

export default App;
