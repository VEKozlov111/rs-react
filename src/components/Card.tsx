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
      className="max-w-xs border rounded border-color1 p-4  cursor-pointer hover:bg-color5 duration-500"
      onClick={() => {
        getId(card.id - 1);
        setModal(true);
      }}
    >
      <img src={card.thumbnail} className="rounded" alt="" />
      <ul>
        <li className="text-color1">- Title: {card.title}</li>
        <li className="text-color1">- Brand: {card.brand}</li>
      </ul>
    </div>
  );
}

export default Card;
