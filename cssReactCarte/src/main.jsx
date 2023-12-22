
import ReactDOM from 'react-dom/client';//importe le module reactDom
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";


import Home from "./pages/Home";
import Card from "./pages/Card";
import CardMom from "./pages/CardMom";

const router = createBrowserRouter([ //on configure des routes dans react
    {
      path: "/",
      element: (
        <>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/card">Card</Link>
            <Link to="/cardmom">CardMom</Link>
          </nav>
          <main>
            <Home/>
          </main>
        </>
      ),
    },
    {
        path: "/Card",
        element: (
          <>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/card">Card</Link>
            <Link to="/cardmom">CardMom</Link>
            </nav>
            <main>
              <Card />
            </main>
          </>
        ),
      },
    {
      path: "/cardMom",
      element: (
        <>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/card">Card</Link>
            <Link to="/cardmom">CardMom</Link>
          </nav>
          <main>
            <CardMom />
          </main>
        </>
      ),
    },
  ]);
  
  // rendering
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );



