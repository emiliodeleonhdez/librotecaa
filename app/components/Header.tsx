"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { asideLinks } from "../constants/constants";
import AppAsideBurguer from "./AsideBurguer";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    console.log("click");
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex items-center gap-3">
      <GiHamburgerMenu onClick={handleShowMenu} className="cursor-pointer md:hidden" />
      <h1 className="text-2xl">{title}</h1>
      <AppAsideBurguer options={asideLinks} show={showMenu} onClose={handleShowMenu} />
    </header>
  );
};

export default Header;
