import React, { useState } from "react";

const Temperatura = () => {
  const [temperatura, setTemperatura] = useState(10);
  function Subir() {
    setTemperatura(temperatura + 1);
  }
  function Bajar() {
    setTemperatura(temperatura - 1);
  }
  return (
    <div>
      <h2>La temperatura es: {temperatura} </h2>
      <p> {
        temperatura <= 10 ? "Hace Frío" : temperatura >10 && temperatura <= 15? "Está Fresco" : temperatura > 15 && temperatura < 27? "Está Cálido" : "Hace calorrrrr" 
        }
        </p>
      <button onClick={Subir}>Aumentar</button>
      <button onClick={Bajar}>Reducir</button>
    </div>
  );
};

export default Temperatura;
