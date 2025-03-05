import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { TodoProvider } from "./Context/TodoContext";
import Desserts from "./Components/Desserts";

function App() {
  return (
    <Container>
      <Desserts />
    </Container>
  );
}

export default App;
