import React from "react";
import "./Addposter.css";
import { useStateValue } from "./StateProvider";

function Addposter({ image, title, price, id, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title, //if k==v no need for tittle:title just =>title
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="addposter">
      {title && (
        <div className="addposter__info">
          <p>{title}</p>
        </div>
      )}
      {/* Image */}
      <img src={image} alt="" />
      {/* <button onClick={addToBasket} >Add to basket</button> */}
    </div>
  );
}

export default Addposter;
