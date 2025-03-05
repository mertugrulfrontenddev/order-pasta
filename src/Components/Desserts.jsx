import { Row, Col } from "react-bootstrap";
import { useContext } from "react";
import dessertsContext from "../Context/DessertsContext";
import Cart from "./Cart";
import Dessert from "./Dessert";
const Desserts = () => {
  const { myDessertList } = useContext(dessertsContext);
  return (
    <div className="d-flex justify-content-between">
      <div className="w-75 mt-3" style={{ marginRight: "50px" }}>
        <h1>Desserts</h1>
        <Row>
          {myDessertList.map((dessert, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Dessert key={index} dessert={dessert} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="w-25 mt-3">
        <Cart />
      </div>
    </div>
  );
};

export default Desserts;
