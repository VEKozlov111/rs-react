import React, { useMemo, useState } from "react";
import data from "../assets/data.json";

interface ISearchProps {
  searchQuerry: string,
  setSearchQuerry: React.Dispatch<React.SetStateAction<string>>
};


function Search({ searchQuerry, setSearchQuerry }: ISearchProps) {
  return (
    <div className="">
      <form className="flex justify-center gap-4">
        <input className="border rounded py-2 px-4" type="search"
          value={searchQuerry}
          onChange={e => setSearchQuerry(e.target.value)}
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default Search;
