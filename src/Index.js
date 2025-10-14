import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./AppLayout";
import "./index.css";
import Error from "./Components/Error";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurentView from "./Utils/RestaurentView";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentView />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRoute} />);
