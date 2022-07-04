import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Book = ({ bookDetails }) => {
  const { addCart } = useContext(Context);
  const {
    id,
    title,
    coverImageSrc,
    price,
    authorName,
    authorId
  } = bookDetails;

  const handleAddCart = () => {
    addCart(id);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column my-2 mx-4 border border-dark col m-2">
      <div className="cover-img">
        <img src={coverImageSrc} alt="" />
        <div className="details">
          <div className="content">
            <h5>
              <Link style={{ color: "#fff" }} to={"/book/details/" + id}>
                {title}
              </Link>
            </h5>
            <h6>
              By{" "}
              <Link style={{ color: "#fff" }} to={"/author/" + authorId}>
                {authorName}
              </Link>
            </h6>
            <h4>Price: <i class="fa fa-inr"></i>{price}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <Link className="btn btn-info" to={"/book/details/" + id}>Details</Link>
        <button onClick={handleAddCart} className="btn btn-dark"> Add Cart </button>
      </div>
    </div>
  );
};

export default Book;
