import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { carts } = useContext(Context);
  return (
    <div className="bg-dark border-bottom sticky-top shadow-sm p-3 px-md-4 mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        <Link
          className="heading my-0 mr-md-auto font-weight-normal"
          style={{
            textDecoration: "none",
            color: "White",
            fontWeight: 500,
            fontSize: "2rem",
            fontFamily: "Source Code Pro, monospace"
          }}
          to="/"
        >
          Book Store - React asssesment
        </Link>

        <Link className="btn btn-info" to="/book-cart">
          my Cart  (
          <span style={{ color: "#ffffff" }}>
            {carts.length !== 0 ? carts.length : 0}
          </span>
          )
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
