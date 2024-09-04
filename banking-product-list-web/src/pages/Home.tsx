import Button from "../components/buttons/Button";
import { AUTHORS, AuthorTypes } from "../hooks/service/interfaces";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../routes/main";
import useAuthor from "../hooks/service/useAuthor";

const Home = () => {
  const { getAuthorId } = useAuthor();

  const handleChangeAuthor = (authorType: AuthorTypes) => {
    localStorage.setItem("authorId", getAuthorId(authorType)[authorType]!);
  };

  return (
    <div className="grid place-items-center grid-rows-6 bg-onSurface h-screen mx-[5%]">
      <p className="text-white text-[32px]"> BANKING PRODUCT LIST APP   </p>
      <div className="grid place-items-center gap-10  p-[21px] max-w-[1020px]" >

      {Object.values(AUTHORS).map((a, i) => (
        <div key={i + ""}>
          <Link
            key={i + ""}
            to={PATHS["/products"]}
            onClick={() => handleChangeAuthor(a)}
          >
            <Button
              type="button"
              color="secondary"
              text={"Ir a productos de " + a}
            />
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Home;
