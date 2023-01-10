import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

const Search = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("sorry, we are trying to add more books");
    setShowMessage(true);
  };

  if (!showMessage) {
    return (
      <form className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search book..."
        />
        <BsSearch className="header__searchIcon" onClick={handleClick} />
      </form>
    );
  }

  setTimeout(() => {
    setShowMessage(false);
  }, 1500);

  return (
    <form className="header__search">
      <div className="header__searchInput" role="alert">
        <p>{message}</p>
       
      </div>
    </form>
  );
};

export default Search;
