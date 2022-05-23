import { BrowserRouter as Routes,Route,Link} from "react-router-dom";
function Nav() {
    return (
      <div className="nav">
        <span>
          <h3>
            <Link to={"/"}>Shopper</Link>
          </h3>
        </span>
        {/* Show follwing div only if we are not on /checkout page */}
        <div className="navCartStatus">
          Cart:{" "}
          <span className="navCartCount">{/* total items in cart here */}</span>
          <button className="navCartCheckout">Checkout</button>
          {/* on this button click user goes to checkout page */}
        </div>
      </div>
    );
  }
  
  export { Nav };
  