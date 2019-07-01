import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";

const Header = props => {
  /**
   * Returns the app title, SearchForm component and Nav component.
   */
  return (
    <div className="nav-container">
      <h1>Wanderlust</h1>
      <h3>A Photo Gallery to Inspire Your Travels</h3>
      <SearchForm history={props.history} onSearch={props.onSearch} />
      <Nav />
    </div>
  );
};

export default Header;
