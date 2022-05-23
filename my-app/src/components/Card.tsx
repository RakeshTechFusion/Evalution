import { useState } from "react";
import { Link } from "react-router-dom";
import { Item } from "./Body";
function Card(props: Item) {
  const [status, setStatus] = useState(false);
  
  const cartData = JSON.parse(localStorage.getItem("cart") || '[]' );
  const clickHandler = (e: any) => {
    setStatus(true);
    console.log(cartData)
    cartData.push(props);
    console.log(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
  };
  return (
    <div className="item mt-8">
      <img
        src="https://via.placeholder.com/150"
        className="productImage"
        alt="1"
      />
      <span>
        <Link className="productLink" to={`/${props.id}`}>
          {/* Product Name */}
          {props.product_name}
        </Link>
      </span>
      <br />
      <span className="productCategory"></span>
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      {props.category}
      <br />
      <span className="productPrice">$</span>
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      {props.price}
      <br />
      <span className="productRating">Ratings: {props.rating}</span>
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      {/*
      <div className="itemInCart">Item Already in cart</div> 
       OR
      <button className="productAddtoCart">
        Add to cart
      </button>
      */}
      <br />
      {status ? (
        <div className="itemInCart">Item Already in cart</div>
      ) : (
        <button
          className="productAddtoCart bg-indigo-300 px-3 py-2 rounded"
          onClick={clickHandler}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export { Card };