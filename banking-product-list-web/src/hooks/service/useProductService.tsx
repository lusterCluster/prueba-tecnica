import { HTTPMethods, IProduct } from "./interfaces";

const apiUrl =
  "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/";

function useProductService() {
  const fetchProductList = async () => {
    const response = await fetch(apiUrl!, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AuthorId: localStorage.getItem("authorId") ?? "0",
      },
    });

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const data = response.json();
    return data;
  };

  async function requestPOST_PUTService(    
    product: IProduct,
    method: HTTPMethods | undefined
  ): Promise<IProduct> {
    const response = await fetch(apiUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        AuthorId: localStorage.getItem("authorId") ?? "0",
      },
      body: JSON.stringify(product),
    });
  
    if (!response.ok) {
      throw new Error("Error en la petición");
    }
  
    const data: IProduct = await response.json();
    return data;
  }
  async function deleteProduct(id: string): Promise<void> {
    const url = apiUrl + id;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'AuthorId': localStorage.getItem("authorId") ?? "0"
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      console.log(`Item with ID ${id} was successfully deleted.`);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  return { fetchProductList, requestPOST_PUTService, deleteProduct };
}


export default useProductService;
