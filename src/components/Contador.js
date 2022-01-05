import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const Contador = () => {
  const [numero, setNumero] = useState(0);
  const handleClick = (e) => {
    switch (e.target.dataset.id) {
      case "+":
        setNumero((prevState) => prevState + 1); //best practice
        break;
      case "-":
        setNumero(numero - 1); //bad practice
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={6} sm={5} lg={3} className="bg-light shadow-lg">
            <h3>My counter: {numero}</h3>
            <Button
              className="btn btn-sm btn-success m-1"
              style={{ width: "2em" }}
              onClick={handleClick}
              data-id="+"
            >
              +
            </Button>
            <Button
              className="btn btn-sm btn-danger m-1"
              style={{ width: "2em" }}
              onClick={handleClick}
              data-id="-"
            >
              -
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Contador;
