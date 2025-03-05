import { useContext } from "react";
import dessertsContext from "../Context/DessertsContext";
import ConfirmOrder from "./ConfirmOrder";

const Cart = () => {
  const { cartList, totalPrice } = useContext(dessertsContext);

  return (
    <div className="bg-white  rounded min-h-50">
      <span className="text-warning d-inline-block mt-3 p-3 fs-4 fw-bold ">
        Your Cart ({cartList.length})
      </span>

      {cartList.length > 0 ? (
        <>
          <ul>
            {cartList
              .filter((cart) => cart.quantity > 0)
              .map((cart) => (
                <div key={cart.name}>
                  <li
                    className="list-unstyled fw-bold"
                    style={{ fontSize: "12px" }}
                  >
                    {cart.name}
                  </li>
                  <div
                    className="mt-2 d-flex p-2"
                    style={{ fontSize: "11px", color: "GrayText" }}
                  >
                    {cart.quantity} x @{cart.price.toFixed(2)}
                    <span className="fw-bold ms-3">
                      ${(cart.quantity * cart.price).toFixed(2)}
                    </span>
                  </div>
                  <hr />
                </div>
              ))}
          </ul>
          <span className="d-inline-block p-3">Order Total:</span>
          <span className="fw-bold">${totalPrice}</span>

          <div className="d-flex justify-content-center p-2 ">
            <ConfirmOrder />
          </div>
        </>
      ) : (
        <p className="p-2 mt-3">Your added items will appear here</p>
      )}
    </div>
  );
};

export default Cart;
