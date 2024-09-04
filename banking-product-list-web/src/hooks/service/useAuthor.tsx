import { useState } from "react";
import { AuthorIdTypes, AUTHORS, AuthorTypes, IAuthor } from "./interfaces";

function useAuthor() {
  //IDs can be fetched from db
  const IDs: AuthorIdTypes = [{ Alice: "1" }, { JhonDoe: "2" }];
  const getAuthorId = (author: AuthorTypes) =>
    IDs.find((a) => a[author]) ?? { Alice: "1" };

  return { getAuthorId, IDs };
}

export default useAuthor;
