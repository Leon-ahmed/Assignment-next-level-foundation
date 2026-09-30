 
 import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Homepage from"./pages/Homepage"
 
import MovieListing from "./pages/MovieListing";

function App() {
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        { index: true, element: <Homepage></Homepage> },
        { path: "movies", element: <MovieListing /> },
      ],
    },
  ]);

  return <div className="font-sans"><RouterProvider router={router} /></div>;
}
 

export default App
