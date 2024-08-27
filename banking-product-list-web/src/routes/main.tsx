import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const paths = {
    home:"/",
}
function Routes() {
    let mainLayout = createBrowserRouter([
        {
          path: paths.home,
          element: <App />,
          children: [
            {
              
            }
          ],
        },        
      ]);
      return mainLayout;
}
export default Routes