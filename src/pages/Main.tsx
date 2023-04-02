import React, { useMemo, useState } from "react";
import Search from "components/Search";
import data from "../assets/data.json";
import Card from "components/Card";

function Main() {
  const [searchQuerry, setSearchQuerry] = useState("");
  const search = useMemo(() => {
    return data.products.filter((item) =>
      item.title.toLowerCase().includes(searchQuerry)
    );
  }, [searchQuerry]);

  return (
    <div>
      <Search searchQuerry={searchQuerry} setSearchQuerry={setSearchQuerry} />
      {search.length ? (
        <div className="flex  gap-4 pt-2 flex-wrap">
          {search.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
      ) : (
        <h2 className="text-color1 text-2xl text-center mt-9">
          Sorry but we did not find anything!
        </h2>
      )}
    </div>
  );
}
export default Main;
