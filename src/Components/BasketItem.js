import React from "react";
import "../Style/BasketItem.css";
import { useStateValue } from "../StateProvider";

function BasketItem({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // Dispatching the item into the data layer
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="basketItem">
      {console.log(">>>", image)}
      <img src={image} />

      <div className="basketItem__info">
        <p>{title}</p>
        <p className="basketItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <button onClick={removeFromBasket}>Remove from basket</button>
    </div>
  );
}

export default BasketItem;
