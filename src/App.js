// import { useState } from "react";
// import Hola from "./components/Hola";
import Tabs from "./components/Tabs";
import "./App.css";
// import ContadorProps from "./components/Contador";
// import Contador from "./components/Contador";
function App() {
  // const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Encabezado</h1>
        {/* <ContadorProps counter={counter} setCounter={setCounter} /> */}
        {/* <Contador /> */}
        {/* <Hola /> */}
        <Tabs />
      </header>
    </div>
  );
}
export default App;
