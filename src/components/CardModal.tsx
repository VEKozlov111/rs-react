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
        className="flex gap-4 flex-col rounded bg-color5 p-4 max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center text-color1 text-2xl">{card.name}</h2>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3018/3018465.png"
          className="close cursor-pointer absolute top-3 right-3"
          alt="close"
          onClick={() => setVisible(false)}
        />
        <div className="flex gap-4 justify-between">
          <img src={card.image} className="rounded w-5/12" alt="" />
          <ul>
            <li className="text-color1">- Name: {card.name}</li>
            <li className="text-color1">- Status: {card.status}</li>
            <li className="text-color1">- Species: {card.species}</li>
            <li className="text-color1">- Gender: {card.gender}</li>
            <li className="text-color1">- Location: {card.location.name}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
