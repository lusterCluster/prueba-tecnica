import { Link } from "react-router-dom";
import ProvideGlobalContext from "./store/context/Global";
import { PATHS } from "./routes/main";
import Button from "./components/buttons/Button";
import Divider from "./components/divider/Divider";

function App() {
  return (
    <>
      <ProvideGlobalContext>
        <div className="flex justify-center  ">
          <div className="flex-col justify-center my-[10%]">
            <p className="text-[72px] font-bold hover:text-white text-center text-onSurface ">
              Prueba Técnica
            </p>
            <p className="text-center text-onSurface text-[55px] hover:text-white">
              Frontend – React (2023)
            </p>
            <Divider fullWidht={true} isActive="active" vertical={false} />
            <Link className="flex justify-center my-[21px] " to={PATHS["/products"]}>
              <Button
                type="button"
                color="primary"
                text="Ir a productos financieros"
              />
            </Link>
            
            <p className="text-[32px] text-center text-onSurface hover:text-white">
              Santiago Narvaez - Senior Frontend Developer
            </p>
          </div>
        </div>
      </ProvideGlobalContext>
    </>
  );
}

export default App;
