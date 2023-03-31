import React from "react";
import rsschoolLogo from "../assets/rs_school.svg";

function Footer() {

  return (
    <footer className="flex py-4 bg-color5 md:px-9 px-2 justify-between">
      <a
        className="hover:scale-110 duration-500"
        href="https://rs.school/js/"
      >
        <img className="md:w-5/6 w-4/6" src={rsschoolLogo} alt="RSSchool" />
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
