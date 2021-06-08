import React, { Fragment, useState } from "react";

const Listado = () => {  
  const [ numeros, setNumeros ] = useState([3,5, 7, 8, 9, 15, 34, 50, 67, 84, 93, 5]);
  return (
    <Fragment>
      <ul>
        {
        numeros.map((item, index) => 
          <li key={index}> Index is: {index} and value is: {item} </li>
        )
        }
      </ul>
    </Fragment>
  );
};
export default Listado;
