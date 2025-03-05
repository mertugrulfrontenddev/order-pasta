import { Button } from "react-bootstrap";
import { useContext } from "react";
import dessertsContext from "../Context/DessertsContext";
import { useState } from "react";

const Dessert = ({ dessert }) => {
  const { handleAddToCart, cartList, handleRemoveFromCart } =
    useContext(dessertsContext);
  const existingDessert = cartList.find((item) => item.name === dessert.name);

  // Eğer mevcutsa, quantity değerini alıyoruz
  const quantity = existingDessert ? existingDessert.quantity : 0;

  return (
    <div className="mt-3">
      <div style={{ position: "relative" }}>
        <img src={dessert.image.desktop} className="img-fluid rounded mb-3" />

        {quantity > 0 ? (
          <div className="count-statue text-center">
            {/* Artı ve eksi butonlarını buraya ekleyebilirsiniz */}
            <button
              className="quantity-button"
              onClick={() => {
                handleRemoveFromCart(dessert);
              }}
            >
              -
            </button>
            <span className="text-white">{quantity}</span>{" "}
            {/* Bu satırda quantity kullanılmalı */}
            <button
              className="quantity-button"
              onClick={() => {
                handleAddToCart(dessert);
              }}
            >
              +
            </button>
          </div>
        ) : (
          <div
            className="add-chart w-50 text-center"
            onClick={() => {
              handleAddToCart(dessert); // Sepete ekleme fonksiyonu
            }}
          >
            <img src="./assets/images/icon-add-to-cart.svg" alt="" />
            <span className="hover">Add to Cart</span>
          </div>
        )}
      </div>
      <div className="text-secondary fs-sm">{dessert.name}</div>
      <div>{dessert.category}</div>
      <div className="text-warning">${dessert.price.toFixed(2)}</div>
    </div>
  );
};

export default Dessert;
