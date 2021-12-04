import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const Validar = (e) => {
    e.preventDefault()
    if(!nombre.trim() || !apellido.trim()) {
      alert("Poné algo gato")
    }
    
  }
  return (
    <Fragment>
      <h3>Súper Formulario</h3>
      {/* tanto for como htmlFor renderizan en DOM como for */}
      <form onSubmit={Validar}>
        <label for="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Introduce tu nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          name="apellido"
          placeholder="Poné tu apellido"
          onChange={(e) => setApellido(e.target.value)}
        />
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Formulario;
