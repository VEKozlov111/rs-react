import React from "react";
import NavItem from "./NavItem";

class Navigation extends React.Component {
  public render() {
    return (
      <nav>
        <ul className="flex md:gap-7 gap-1">
          <NavItem title="Main page" to="/" />
          <NavItem title="Fill out the form" to="/form" />
          <NavItem title="Аbout" to="/about" />
        </ul>
      </nav>
    );
  }
}

export default Navigation;
