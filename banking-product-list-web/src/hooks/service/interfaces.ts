export const AUTHORS = {
  Alice: "Alice",
  JhonDoe: "JhonDoe",
} as const;
export type AuthorTypes = keyof typeof AUTHORS;
export type IAuthor = { [key in AuthorTypes]?:string }
export type AuthorIdTypes = IAuthor[]

