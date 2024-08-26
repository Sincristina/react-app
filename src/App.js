import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Blog from "./pages/Blog";
import Marketing from "./pages/Marketing"
import Seo from "./pages/Seo";
import SeoLocal from "./pages/SeoLocal";
import Branding from "./pages/Branding";
import Trends from "./pages/Trends"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },

  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/marketing",
    element: <Marketing />,
  },

  {
    path: "/seoLocal",
    element: <SeoLocal />,
  },

  {
    path: "/seo",
    element: <Seo />,
  },

  {
    path: "/branding",
    element: <Branding />,
  },

  {
    path: "/trends",
    element: <Trends />,
  },



  {
    path: "*",
    element: <Page404 />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;