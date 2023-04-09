import React, { useState, useEffect } from "react";
import Search from "components/Search";
import Card from "components/Card";
import CardModal from "components/CardModal";
import axios from "axios";
import { useFetch } from "hooks/useFetch";
import { ICard } from "types/types";

function Main() {
  const [data, setData] = useState<ICard[]>([]);
  const [querry, setQuerry] = useState("");
  const {
    fetching: searchCards,
    isLoading: isLoadingSearch,
    err: searchErr,
  } = useFetch(async () => {
    const respons = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=1&name=${querry}`
    );
    setData(respons.data.results as ICard[]);
  });

  const {
    fetching: fetchCards,
    isLoading: isLoadingCards,
    err: cardErr,
  } = useFetch(async () => {
    const respons = await axios.get(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    setData(respons.data.results as ICard[]);
  });

  useEffect(() => {
    if (typeof fetchCards === "function") {
      fetchCards();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (typeof searchCards === "function") {
      searchCards();
    }
    // eslint-disable-next-line
  }, [querry]);

  const [modal, setModal] = useState(false);
  const [id, getId] = useState<number>();
  const cardIndex = data.findIndex(function (person) {
    return person.id === id;
  });
  return (
    <div>
      {data.length > 0 && cardIndex >= 0 && (
        <CardModal
          card={data[cardIndex]}
          visible={modal}
          setVisible={setModal}
        />
      )}

      <Search setQuerry={setQuerry} />

      {cardErr && (
        <h2 className="text-color1 text-2xl text-center mt-9">{cardErr}</h2>
      )}
      {isLoadingCards || isLoadingSearch ? (
        <h2 className="text-color1 text-2xl text-center mt-9">Loading....</h2>
      ) : data.length > 0 && !(cardErr || searchErr) ? (
        <div className="flex justify-center gap-4 pt-2 flex-wrap">
          {data.map((card) => (
            <Card card={card} key={card.id} getId={getId} setModal={setModal} />
          ))}
        </div>
      ) : (
        <h2 className="text-color1 text-2xl text-center mt-9">
          Sorry but we did not find anything
        </h2>
      )}
    </div>
  );
}
export default Main;
