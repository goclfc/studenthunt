import React from "react";
import Logo from "../Logo";
import SearchInput from "../SearchBar";
import Menu from "./Menu";
const Header = () => {
  return (
    <div className="flex justify-between items-center w-full p-6">
      <Logo />
      <SearchInput />
      <Menu />
    </div>
  );
};
export default Header;
