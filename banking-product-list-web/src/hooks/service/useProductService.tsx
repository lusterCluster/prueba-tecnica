const apiUrl =
  "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/";
export type HTTPMethods = "POST" | "PUT" | "GET" | "DELETE";
export interface IProduct {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}
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
  return { fetchProductList, requestPOST_PUTService };
}


export default useProductService;
