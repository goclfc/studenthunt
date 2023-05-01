import React from "react";
import Logo from "../Logo";
import SearchInput from "../SearchBar";
import Menu from "./Menu";
import './header.css'
const Header = (props) => {
  return (
    <div className="header">
      <Logo />
      <SearchInput />
      <Menu actions={props}/>
    </div>
  );
};
export default Header;
