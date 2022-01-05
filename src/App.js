// import { useState } from "react";
import Hola from "./components/Hola";
import Contador from "./components/Contador";
// import ContadorProps from "./components/Contador";
// import Tabs from "./components/Tabs";
// import CicloVida from "./components/CicloVida";
// import ContadorRenders from "./components/ContadorRenders";
import "./App.css";

function App() {
  // const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {/* <ContadorProps counter={counter} setCounter={setCounter} /> */}
        <Hola />
        <Contador />
        {/* <Tabs /> */}
        {/* <CicloVida /> */}
        {/* <ContadorRenders /> */}
      </header>
    </div>
  );
}
export default App;
