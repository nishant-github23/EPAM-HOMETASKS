import React, { useContext } from "react";
import { Context } from "../context/Context";
import Book from "./Book";

const Books = () => {
  const { books, searchedBooks,  } = useContext(
    Context
  );

  return (
    <div className="container">
      <h1
        style={{ marginLeft: "20px", color: "#000" }}
        className="display-4 text-center mb-3"
      >
      </h1>

      <div className="row">
        {searchedBooks.length === 0
          ? books.map(book => {
              const { id } = book;
              return <Book key={id} bookDetails={book} />;
            })
          : searchedBooks.map(book => {
              const { id } = book;
              return <Book key={id} bookDetails={book} />;
            })}
      </div>
    </div>
  );
};

export default Books;
