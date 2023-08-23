import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ProductList } from "./pages/product-list";
import { ProductView } from "./pages/product-view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/product/:productId",
    element: <ProductView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
