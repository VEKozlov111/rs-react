import React, { useMemo, useState } from "react";
import Search from "components/Search";
import data from "../assets/data.json";
import Card from "components/Card";

function Main() {
  const [searchQuerry, setSearchQuerry] = useState('');
  const search = useMemo(() => {
    return data.products.filter(item => item.title.toLowerCase().includes(searchQuerry))
  }, [searchQuerry]);

  return (
    <div>
      <Search searchQuerry={searchQuerry}
        setSearchQuerry={setSearchQuerry}
      />
      <div className="flex gap-4 pt-2 flex-wrap">
        {search.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}
export default Main;

