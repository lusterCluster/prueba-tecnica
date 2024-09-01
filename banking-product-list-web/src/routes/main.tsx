import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import ProductForm from "../components/ProductForm";
import BankingProducts from "../pages/products/BankingProducts";

export const PATHS = {
  "/": "/",
  "/products": "/products",
  "/add-product": "/add-product",
  "/edit-product": "/edit-product",
} as const;
export type PathTypes = keyof typeof PATHS;
const router = createBrowserRouter([
  {
    path: PATHS["/products"],
    element: <BankingProducts />,
    children: [],
  },
  {
    path: PATHS["/add-product"],
    element: <ProductForm />,
  },
  {
    path: PATHS["/edit-product"],
    element: <ProductForm />,
  },
  {
    path: PATHS["/"],
    element: <App />,
  },
]);

export default router;
