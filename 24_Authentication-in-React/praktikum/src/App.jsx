import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateProduct from "./pages/CreateProduct";
import { DetailProduct } from "./pages/DetailProduct";
import { ListProduct } from "./pages/ListProduct";
import UpdateProduct from "./pages/UpdateProduct";
import { Login } from "./pages/Login";
import { Auth } from "./components/Auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/product/list",
      element: <ListProduct />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "/product",
          element: <CreateProduct />,
        },
        {
          path: "/product/:id",
          element: <UpdateProduct />,
        },
        {
          path: "/product/detail/:id",
          element: <DetailProduct />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
