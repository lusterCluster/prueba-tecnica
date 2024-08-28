import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddProduct from "../pages/products/AddProduct";

const paths = {
    home:"/",
    add:"/add-product"
}
function Routes() {
    let mainLayout = createBrowserRouter([
        {
          path: paths.home,
          element: <App />,
          children: [
            
          ],
        },  
        {
          path: paths.add,
          element:<AddProduct/>
        }      
      ]);
      return mainLayout;
}
export default Routes