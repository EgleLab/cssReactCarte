import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/card">Card</Link>
        <Link to="/cardmom">CardMom</Link>
      </nav>
      <main>???</main>
    </>
  );
}

export default App;
