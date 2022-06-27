import { useEffect, useState } from "react";

const FetchApi = () => {
  const [people, setPeople] = useState([]);

  const fetchPeopleData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPeople(data);
      });
  };

  useEffect(() => {
    fetchPeopleData("https://akabab.github.io/starwars-api/api/all.json");
  }, []);

  return (
    <div className="container">
      {people.map((item) => {
        return (
          <div className="people-container" key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} alt="" className="people-img" />
            <p>Species: {item.species}</p>
            <p>Height: {item.height} m</p>
            <p>Mass: {item.mass} kg</p>
            <div className="btn-container">
              <button
                className="wiki-btn"
                onClick={() => window.open(item.wiki)}
              >
                Click to Star Wars Wiki
              </button>
              <button className="like-btn">save this character</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FetchApi;
