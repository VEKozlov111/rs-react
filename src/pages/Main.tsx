import React, { useState } from "react";
import Search from "components/Search";
import Card from "components/Card";
import CardModal from "components/CardModal";
import { cardApi } from "services/CardsService";
import { useAppSelector } from "hooks/redux";

function Main() {
  const { querySearch } = useAppSelector((state) => state.searchReduser);
  const {
    data: cards,
    error,
    isFetching,
  } = cardApi.useFetchAllItemsQuery(`${querySearch}`);

  const [modal, setModal] = useState(false);
  const [id, getId] = useState<number>();

  if (cards) {
    const cardIndex = cards.results.findIndex(function (person) {
      return person.id === id;
    });
    return (
      <div>
        <Search />
        {error && (
          <h2 className="text-color1 text-2xl text-center mt-9">
            Sorry but we did not find anything
          </h2>
        )}
        {isFetching && (
          <h2 className="text-color1 text-2xl text-center mt-9">Loading....</h2>
        )}
        {cards && cards.results.length > 0 && !error && !isFetching && (
          <div className="flex justify-center gap-4 pt-2 flex-wrap">
            {cards.results.map((card) => (
              <Card
                card={card}
                key={card.id}
                getId={getId}
                setModal={setModal}
              />
            ))}
          </div>
        )}
        {cards && cards.results.length > 0 && cardIndex >= 0 && (
          <CardModal
            card={cards.results[cardIndex]}
            visible={modal}
            setVisible={setModal}
          />
        )}
      </div>
    );
  }
  return (
    <div>
      <Search />
      <h2 className="text-color1 text-2xl text-center mt-9">Loading....</h2>
    </div>
  );
}
export default Main;
