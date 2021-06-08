import React, { Fragment, useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0);
  const Aumentar = () => {
    setNumero(numero + 1);
  };
  const Reducir = () => {
    setNumero(numero - 1);
  };

  return (
    <Fragment>
      <h3>My counter: {numero}</h3>
      <button onClick={Aumentar}>Increase</button>
      <button onClick={Reducir}>Decrease</button>
    </Fragment>
  );
};
export default Contador;
