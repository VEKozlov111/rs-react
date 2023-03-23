import React from "react";
import Navigation from "./Navigation";

class Header extends React.Component {
  render() {
    return (
      <header className="flex py-4 bg-color5 md:px-9 px-2 justify-between">
        <h1>
          <a
            className="hover:text-color2 text-color1 duration-500 text-2xl"
            href="/"
          >
            Seacher
          </a>
        </h1>
        <Navigation />
      </header>
    );
  }
}

export default Header;
