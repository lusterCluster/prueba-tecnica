

// Ahora puedes acceder a tus variables de entorno
const apiUrl = "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products"
export interface IProduct {
    id: string;
    name: string;
    description: string;
    logo: string;
    date_release: string;
    date_revision: string;
}

export type ProductType = IProduct[]
const authorId = '1'; // Reemplaza con el valor de authorId

// Realiza la petición GET con un header personalizado
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
// Uso de la función
fetchProductList()
    .then(cards => {
        // Aquí tienes los datos que fueron retornados
        console.log(cards);
    })
    .catch(error => {
        console.error('Error:', error);
    });