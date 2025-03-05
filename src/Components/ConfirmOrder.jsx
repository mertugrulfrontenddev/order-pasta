import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import dessertsContext from "../Context/DessertsContext";
const ConfirmOrder = () => {
  const { cartList } = useContext(dessertsContext);
  const [showOverlay, setShowOverlay] = useState(false);
  const handleConfirmOrder = () => {
    setShowOverlay(!showOverlay);
  };

  const handleCloseEvent = () => {
    setShowOverlay(!showOverlay);
  };
  return (
    <>
      <Button
        variant="warning"
        className="text-white"
        onClick={handleConfirmOrder}
      >
        Confirm Order
      </Button>

      {showOverlay && (
        <div className="overlay">
          <div className="content-order">
            <div className="close" onClick={handleCloseEvent}>
              X
            </div>
            Siparişinizde toplam:{" "}
            {cartList.filter((cart) => cart.quantity > 0).length} adet ürün var
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmOrder;
