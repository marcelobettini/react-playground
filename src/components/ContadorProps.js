//esta variante recibe por props el estado y el setter de estado, y actualiza el estado del
// componente padre(App.js)

const ContadorProps = ({ counter, setCounter }) => {
  const handleClick = (e) => {
    switch (e.target.dataset.id) {
      case "+":
        setCounter((prevState) => prevState + 1); //best practice, modify prevState instead of counter
        break;
      case "-":
        setCounter((prevState) => prevState - 1); //prevState es un nombre convencional y subjetivo
        break;
      default:
        break;
    }
  };
  return (
    <Fragment>
      <h3>My counter: {counter}</h3>
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
export default ContadorProps;
