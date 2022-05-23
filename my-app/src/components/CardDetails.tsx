import { Item } from "./Body";

function CardDetails(props: Item) {
  console.log(props)
  return (
    <div className="product">
      <span>
        <h4 className="detailsTitle"></h4>
      </span>
      <img className="detailsImage" src="" alt="" />
      {/* Notice the "Price: $". do not edit it. */}
      <span className="detailsPrice">Price: $</span>
      <span className="detailsPrice"></span>
      <div>
        <h5>Reviews:</h5>
        {/* Iterate over reviews and populate review like: 
        
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
        
        */}
      </div>
    </div>
  );
}
export { CardDetails };