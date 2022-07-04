import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const BookCartCheckOut = () => {
  const { books, carts } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);
   const gst = (totalPrice*0.12);
   const gstToShow = gst.toFixed(2);

  const getSubtotal = (books, carts) => {
    let subtotal = 0;
    carts.forEach(cart => {
      books.forEach(book => {     //normalizing state in redux  -> try to optimize upto 0(N)
        if (book.id === cart.id) {
          subtotal = subtotal + book.price * cart.quantity;
        }
      });
    });

    return subtotal.toFixed(2);
  };

  let subtotal = getSubtotal(books, carts);
  let tempTotal = (parseFloat(subtotal) + gst).toFixed(2);

  useEffect(() => {
    setTotalPrice(tempTotal);
  }, [tempTotal]);

  return (
    <div className="container">
      <div className="checkout-area w-75 mx-auto my-5">
        <h1 className="heading text-center">Total</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td><i class="fa fa-inr"></i>{subtotal}</td>
            </tr>
            <tr>
              <td>GST Charge</td>
              <td><i class="fa fa-inr"></i>{gstToShow}</td>
            </tr>
            <tr className="text-primary h4">
              <td>Total</td>
              <td><i class="fa fa-inr"></i>{totalPrice}</td>
            </tr>
            <tr>
              <td>
                <Link className="btn btn-outline-primary" to="/">
                  Back To Shopping
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-outline-info"
                  onClick={() => {
                    alert("You will be directed to some payment gateway - Paisa tyyar rakho");
                  }}
                >
                  Checkout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookCartCheckOut;
