import React, { useState } from "react";

interface ISearchProps {
  setQuerry: (e: string) => void;
}

function Search({ setQuerry }: ISearchProps) {
  const [searchQuerry, setSearchQuerry] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setQuerry(searchQuerry);
  }

  return (
    <div className="">
      <form className="flex justify-center gap-4" onSubmit={handleSubmit}>
        <input
          className="border rounded py-2 px-4"
          type="search"
          value={searchQuerry}
          onChange={(e) => setSearchQuerry(e.target.value)}
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default Search;
