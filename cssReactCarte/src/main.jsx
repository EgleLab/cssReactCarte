
import ReactDOM from 'react-dom/client';//importe le module reactDom
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Card from "./pages/Card";
import CardMom from "./pages/CardMom";

const router = createBrowserRouter([ //on configure des routes dans react
    {
        element: <App/>,
        children:[
            {
        path: "/",
        element: <Home/>,   
      },
    {
        path: "/card",
        element: <Card />,
    }, 
       {
      path: "/cardmom",
      element: <CardMom />
       },
    ],
},
]);
      
   
  
  // rendering
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );



