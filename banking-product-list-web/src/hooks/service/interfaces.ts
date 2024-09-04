export const AUTHORS = {
  Alice: "Alice",
  JhonDoe: "JhonDoe",
} as const;
export type AuthorTypes = keyof typeof AUTHORS;
export type IAuthor = { [key in AuthorTypes]?:string }
export type AuthorIdTypes = IAuthor[]

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