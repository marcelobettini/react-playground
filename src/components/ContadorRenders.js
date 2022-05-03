import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
const ContadorRenders = () => {
  //seteamos una variable de estado y su setter
  const [reactiveMsg, setReactiveMsg] = useState("");
  //inicializamos renderCount en 1 al vincularlo con useRef
  const renderCount = useRef(1);
  //el useEffect actualizará el valor de renderCount, cada vez que
  //se actualice reactiveMsg (se lo pasa el control de dependencias)
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [reactiveMsg]);

  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-center bg-dark">
          <Col md={8}>
            <Form className="m-4 ">
              <Form.Group className="bg-warning p-4" controlId="formBasicInput">
                <Form.Label className="text-uppercase bg-primary text-white p-2 d-block text-start">
                  Input text below{" "}
                </Form.Label>
                <Form.Control
                  placeholder="Igrese texto..."
                  onChange={(e) => setReactiveMsg(e.target.value)}
                  autoFocus
                />

                <Form.Control
                  readOnly
                  className="mt-2"
                  placeholder={reactiveMsg || "Aquí verá su texto"}
                />
              </Form.Group>
              <p className="text-white">
                El componente se renderizó {renderCount.current}
                {renderCount.current > 1 ? " veces" : " vez"}
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContadorRenders;
