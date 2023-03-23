import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="">
        <form className="flex justify-center gap-4">
          <input className="border rounded py-2 px-4" type="search" />
          <button className="btn">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;