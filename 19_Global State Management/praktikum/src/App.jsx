import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateProduct from "./pages/CreateProduct";
import { DetailProduct } from "./pages/DetailProduct";
import { ListProduct } from "./pages/ListProduct";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/product",
    element: <CreateProduct />,
  },
  {
    path: "/product/detail/:id",
    element: <DetailProduct />,
  },
  {
    path: "/product/list",
    element: <ListProduct />,
  },
  {
    path: "/product/:id",
    element: <UpdateProduct />,
  },
]);
  return <RouterProvider router={router} />;
}

export default App
