import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import ProductForm from "../components/form/product/ProductForm";
import BankingProducts from "../pages/products/BankingProducts";
import Home from "../pages/Home";

export const PATHS = {
  "/": "/",
  "/home": "/home",
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
  {
    path: PATHS["/home"],
    element: <Home/>,
    children:[
      
    ]
      
  },
]);

export default router;
