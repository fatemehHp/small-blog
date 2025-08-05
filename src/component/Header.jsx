import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white shadow-md rounded-lg p-4 mb-6">
      <Logo />
      <SearchBar />
      <SearchResult />
    </header>
  );
};

export default Header;
