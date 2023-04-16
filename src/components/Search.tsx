import React, { useState } from "react";
import { useAppDispatch } from "hooks/redux";
import { searchSlice } from "store/reducers/searchSlice";

function Search() {
  const [searchQuerry, setSearchQuerrys] = useState("");
  const { setSearchQuery } = searchSlice.actions;
  const dispatch = useAppDispatch();

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    dispatch(setSearchQuery(searchQuerry));
  }

  return (
    <div className="">
      <form className="flex justify-center gap-4" onSubmit={handleSubmit}>
        <input
          className="border rounded py-2 px-4"
          type="search"
          value={searchQuerry}
          onChange={(e) => setSearchQuerrys(e.target.value)}
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default Search;
