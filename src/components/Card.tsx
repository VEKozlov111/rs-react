import React from "react";
import { ICard } from "types/types";

interface ICardProps {
  card: ICard;
}

class Card extends React.Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }

  render() {
    return (
      <div className="max-w-xs border rounded border-color1 p-4 hover:scale-110 duration-500 cursor-pointer">
        <img src={this.props.card.thumbnail} className="rounded" alt="" />
        <ul>
          <li className="text-color1">- Title: {this.props.card.title}</li>
          <li className="text-color1">
            - Description: {this.props.card.description}
          </li>
          <li className="text-color1">- Brand: {this.props.card.brand}</li>
          <li className="text-color1">
            - Category: {this.props.card.category}
          </li>
        </ul>
      </div>
    );
  }
}

export default Card;
