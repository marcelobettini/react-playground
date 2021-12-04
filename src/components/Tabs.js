import { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
const Tabs = () => {
  const URL = "https://jsonplaceholder.typicode.com/";
  const [resourceType, setResourceType] = useState("posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(URL + resourceType)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [resourceType]);

  return (
    <Fragment>
      <h5> Este es el componente Tabs</h5>
      <Button
        className="btn  btn-success my-1 w-25"
        onClick={() => setResourceType("posts")}
      >
        posts
      </Button>
      <Button
        className="btn  btn-warning my-1 w-25"
        onClick={() => setResourceType("comments")}
      >
        comments
      </Button>
      <Button
        className="btn  btn-primary my-1 w-25"
        onClick={() => setResourceType("users")}
      >
        users
      </Button>
      <section>
        {data.map((e) => {
          return (
            <div key={e.id}>
              <h3>{e.title}</h3>
              <p>{e.body}</p>
            </div>
          );
        })}
      </section>
    </Fragment>
  );
};
export default Tabs;
