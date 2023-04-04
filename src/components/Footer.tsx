import React from "react";
import { ReactComponent as Logo } from "../assets/rs_school.svg";

function Footer() {
  return (
    <footer className="flex py-4 bg-color5 md:px-9 px-2 justify-between">
      <a className="hover:scale-110 duration-500" href="https://rs.school/js/">
        <Logo />
      </a>
      <a
        className="hover:text-color2 duration-500 md:text-base text-xs"
        href="https://github.com/VEKozlov111"
      >
        Vladislav Kozlov
      </a>
      <h2>©2023 RS School. All rights reserved.</h2>
    </footer>
  );
}

export default Footer;
