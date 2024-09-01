const apiUrl = "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/"
export type HTTPMethods = "POST" | "PUT" | "GET" | "DELETE" 
export interface IProduct {
    id: string;
    name: string;
    description: string;
    logo: string;
    date_release: string;
    date_revision: string;
}

export type ProductType = IProduct[]
const authorId = '1'; 

export async function fetchProductList(): Promise<ProductType> {
    const response = await fetch(apiUrl!, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'AuthorId': authorId
        }
    });

    if (!response.ok) {
        throw new Error('Error en la petición');
    }

    const data: ProductType = await response.json();
    return data;
}

export async function requestPOST_PUTService(product: IProduct, method:HTTPMethods | undefined): Promise<IProduct> {
    const response = await fetch(apiUrl, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'AuthorId': authorId
        },
        body: JSON.stringify(product)
    });

    if (!response.ok) {
        throw new Error('Error en la petición');
    }

    const data: IProduct = await response.json();
    return data;
}
export async function deleteProduct(id: string): Promise<void> {
    const url = apiUrl + id;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'AuthorId': authorId
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