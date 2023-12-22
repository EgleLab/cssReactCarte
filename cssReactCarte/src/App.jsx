import { useState } from 'react';
import './App.css';
import Home from "./pages/Home";
import Card from "./pages/Card";


function App() {
  const [currentLocation, setCurrentLocation] = useState("/");

  return (
    <>
       <nav>
          <button onClick={() => setCurrentLocation("/")} type="button">
            Get your card!
          </button>
       </nav>
      <main>
          {currentLocation === "/" && <Home />}
          {currentLocation === "/card" && <Card />}
      </main>
    </>
  )
}

export default App
