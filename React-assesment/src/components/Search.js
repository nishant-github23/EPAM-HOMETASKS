import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";

const Search = () => {
  const [keywords, setKeywords] = useState("");
  const { getSearchedBooks, searchString } = useContext(Context);

  const handleChange = e => {
    setKeywords(e.target.value);
    getSearchedBooks(e.target.value);
  };

  useEffect(() => {
    if (searchString === null) {
      setKeywords("");
    }
  }, [searchString]);

  return (
    <input
      onChange={handleChange}
      style={{ width: "90%" , borderRadius:'20px' }}
      className="form-control py-4 m-auto"
      type="search"
      placeholder="Enter book name here"
      value={keywords}
    />
  );
};

export default Search;
