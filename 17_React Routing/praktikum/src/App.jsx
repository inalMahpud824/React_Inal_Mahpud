import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateProduct from "./pages/CreateProduct";
import { DetailProduct } from "./pages/DetailProduct";

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
    path: "/product/:id",
    element: <DetailProduct />,
  },
]);
  return <RouterProvider router={router} />;
}

export default App
