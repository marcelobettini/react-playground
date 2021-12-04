import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";

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
    <Fragment>
      <h3>My counter: {numero}</h3>
      <div>
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
      </div>
    </Fragment>
  );
};
export default Contador;
