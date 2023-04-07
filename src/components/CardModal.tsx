import React from "react";
import { ICard } from "types/types";

interface ICardModalProps {
  card: ICard;
  visible: boolean;
  setVisible: (e: boolean) => void;
}

function CardModal({ card, visible, setVisible }: ICardModalProps) {
  const cl = ["modal"];
  if (visible) {
    cl.push("modal-active");
  }

  return (
    <div className={cl.join(" ")} onClick={() => setVisible(false)}>
      <div
        className="flex gap-4 flex-col rounded bg-color5 p-4 max-w-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center text-color1 text-2xl">{card.title}</h2>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3018/3018465.png"
          className="close cursor-pointer absolute top-3 right-3"
          alt="close"
          onClick={() => setVisible(false)}
        />
        <div className="flex gap-4 justify-between">
          <img src={card.thumbnail} className="rounded w-5/12" alt="" />
          <ul>
            <li className="text-color1">- Title: {card.title}</li>
            <li className="text-color1">- Description: {card.description}</li>
            <li className="text-color1">- Brand: {card.brand}</li>
            <li className="text-color1">- Category: {card.category}</li>
            <li className="text-color1">- Price: {card.price}</li>
            <li className="text-color1">- Rating: {card.rating}</li>
            <li className="text-color1">- Stock: {card.stock}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
