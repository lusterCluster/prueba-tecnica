import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import ProductForm from "../components/ProductForm";

export const PATHS = {
    "/products":"/products",
    "/add-product":"/add-product",
    "/edit-product":"/edit-product",
    "/delete-product":"/delete-product",
} as const
export type PathTypes = keyof typeof PATHS
const router = createBrowserRouter([
        {
          path: PATHS["/products"],
          element: <App />,
          children: [
            
          ],
        },  
        {
          path: PATHS["/add-product"],
          element:<ProductForm/>
        },      
        {
          path: PATHS["/edit-product"],
          element:<ProductForm/>
        },             
      ]);
      

export default router