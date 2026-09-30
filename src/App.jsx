 
 import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Homepage from"./pages/Homepage"
import MovieList from "./pages/MovieList"
function App() {
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        { index: true, element: <Homepage></Homepage> },
        { path: "movies", element: <MovieList /> },
      ],
    },
  ]);

  return <div className="font-sans"><RouterProvider router={router} /></div>;
}
 

export default App
