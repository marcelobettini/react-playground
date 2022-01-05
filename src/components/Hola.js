import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hola() {
  const today = new Date();
  const obj = {
    nombre: "Marcelo Bettini",
    fecha: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
  };
  const { nombre, fecha } = obj;
  return (
    <Container>
      <Row>
        <Col xs={12} className="text-center">
          <h1>Encabezado</h1>
          <p>Hola Mundo, les saluda {nombre}</p>
          <p>Hoy es {fecha}</p>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default Hola;
