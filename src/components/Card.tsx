import React from "react";
import { ICard } from "types/types";

interface ICardProps {
  card: ICard;
}

function Card({ card }: ICardProps) {
  return (
    <div className="max-w-xs border rounded border-color1 p-4 hover:scale-110 duration-500 cursor-pointer">
      <img src={card.thumbnail} className="rounded" alt="" />
      <ul>
        <li className="text-color1">- Title: {card.title}</li>
        <li className="text-color1">- Description: {card.description}</li>
        <li className="text-color1">- Brand: {card.brand}</li>
        <li className="text-color1">- Category: {card.category}</li>
      </ul>
    </div>
  );
}

export default Card;
