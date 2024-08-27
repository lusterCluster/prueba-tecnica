import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div id="container" className="bg-background flex gap-2 p-1 rounded-[6px] ">
      <span className="material-symbols-outlined">search</span>
      <input className="bg-background focus:outline-none h-[27px] w-[114px]" placeholder="Search..."/>
    </div>
  );
};

export default SearchBar;
