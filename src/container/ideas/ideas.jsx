import { useEffect, useState } from "react";
import "./ideas.scss";

const Ideasbase = () => {
  const [title, setTitle] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/photos")
      .then((request) => request.json())
      .then((response) => setTitle(response));
  }, []);
  return (
    title && (
      <div className="ideas__block">
        {title.map((title, id) => {
          return (
              <div key={id} className="ideas__box">
                <p>{id}</p>
                <h1>{title.title}</h1>
              </div>
          );
        })}
      </div>
    )
  );
};

export default Ideasbase;
