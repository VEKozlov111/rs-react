import React from "react";
import { ICard } from "types/types";

interface ICardProps {
  card: ICard;
  getId: (e: number) => void;
  setModal: (e: boolean) => void;
}

function Card({ card, getId, setModal }: ICardProps) {
  return (
    <div
      className="flex gap-4 flex-col max-w-xs border rounded border-color1 p-4  cursor-pointer hover:bg-color5 duration-500"
      onClick={() => {
        getId(card.id);
        setModal(true);
      }}
    >
      <h2 className="text-color1 text-center">{card.name}</h2>
      <img src={card.image} className="rounded" alt="" />
    </div>
  );
}

export default Card;
