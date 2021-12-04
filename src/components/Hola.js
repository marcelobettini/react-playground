import React, { Fragment } from "react";

function Hola() {
  const today = new Date();
  const obj = {
    nombre: "Marcelo Bettini",
    fecha: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
  };
  const { nombre, fecha } = obj;
  return (
    <Fragment>
      <p>Hola Mundo, les saluda {nombre}</p>
      <p>Hoy es {fecha}</p>
    </Fragment>
  );
}

export default Hola;
