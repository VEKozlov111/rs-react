import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-color1 text-2xl">About this App</h1>
        <ul>
          <li className="text-color1 text-xl">
            - This project was bootstrapped with Create React App
          </li>
        </ul>
      </div>
    );
  }
}
