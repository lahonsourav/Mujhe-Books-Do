import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate("/search/${keyword}");
    } else {
      navigate("/");
    }
  };
  return (
    <form onSubmit={searchHandler} className="header__search">
      <input
        className="header__searchInput"
        type="text"
        placeholder="Search book..."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <BsSearch className="header__searchIcon" />
    </form>
  );
};

export default Search;
