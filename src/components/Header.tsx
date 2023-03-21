import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="flex py-4 bg-color5 md:px-9 px-2 justify-between">
        <h1>
          <a href="/">Seacher</a>
        </h1>
        <nav >
          <ul className="flex md:gap-7 gap-1">
            <li><a href="/">Main page</a></li>
            <li><a href="">About</a></li>
          </ul>
        </nav>
      </div>

    );
  }
}

export default Header;