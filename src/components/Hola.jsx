import React, {Fragment} from "react";

function Hola() {
  let nombre = "Marcelo Bettini"
  let today = new Date()
  let fecha = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`
  
  return (
    <Fragment>
      <p>Hola Mundo, les saluda {nombre}</p>
      <p>Hoy es {fecha}</p>
    </Fragment>
  );
}

export default Hola;

