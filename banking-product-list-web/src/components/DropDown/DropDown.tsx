import  { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../rest/productListService";
import { PATHS, PathTypes } from "../../routes/main";

type Props = {
  isOpen: boolean;
  product: IProduct;
  handleDelete: () => void
  onClose: () => void
};

const DropDown: FC<Props> = ({ isOpen, product, handleDelete, onClose}) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null)
  const handleRedirect = (path: PathTypes) =>
    navigate(path, { state: product });
  const handleOnDelete = () => {    
    onClose()
    handleDelete()
  }
// useEffect(() => {
//   const handleClick = (event: MouseEvent) => {
//     if (ref.current && !ref.current.contains(event.target as HTMLDivElement) && isOpen) {      
//       onClose()
//     }

//   }
//   document.addEventListener('click', handleClick)

//     return () => {
//       document.removeEventListener('click', handleClick)
//     }
// }, [])


  return (
    <>
      {isOpen && (
        <div
          ref={ref}
          id="dropdown"
          className=" absolute right-0 z-10 text-white  bg-secondaryOnSurface divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <button
                onClick={() => handleRedirect(PATHS["/edit-product"])}
                className="block px-4 py-2 hover:bg-gray-100 hover:bg-background hover:text-onSurface w-full"
              >
                Editar
              </button>{" "}
            </li>
            <li>
              <button
                onClick={handleOnDelete}
                className="block px-4 py-2 hover:bg-gray-100 hover:bg-background hover:text-onSurface w-full "
              >
                Eliminar
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default DropDown;
