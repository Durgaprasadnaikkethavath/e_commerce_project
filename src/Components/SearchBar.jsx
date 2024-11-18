import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const SearchBar = () => {
  const { products, search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  return showSearch ? (
    <>
      <div className="search_bar_container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
        />
        <p onClick={() => setShowSearch(false)}>
          <ion-icon name="close-outline"></ion-icon>
        </p>
      </div>
    </>
  ) : null;
};

export default SearchBar;
