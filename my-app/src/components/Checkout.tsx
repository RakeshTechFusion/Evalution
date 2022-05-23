

function Checkout() {

    // HINT: you can fetch multiple IDs from json-server like this:
    // localhost:8080/products?id=1&id=4&id=6
    // this will fetch products with id 1, 4 and 6.
   
    // If cart is empty, show following div:
    if () {
      return <div className="emptyCart">Nothing in cart</div>;
    }
  
  
  // else:
    return (
      <div style={{ padding: 10 }}>
        <h4>Checkout:</h4>
        <div className="checkoutWrapper">
          {/* Show Items in cart here likeL
          
          <div className="checkoutItem">
            <span>Product Name</span>
            <span>$1235</span>  // Notice $. eg: $1234 and not 1234
          </div>
          */}
        </div>
        <hr className="hr" />
        <div className="totalContainer">
          <span>Total:</span>
          <span className="total">
            {/* Show total here */}
          </span>
        </div>
      </div>
    );
  }
  
  export { Checkout };
  