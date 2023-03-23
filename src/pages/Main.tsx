import React from "react";
import Search from "components/Search";
import data from "../assets/data.json"
import Card from "components/Card";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <div className="flex gap-4 pt-2 flex-wrap">
          {data.products.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
