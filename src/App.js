import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { API_KEY, BASE_URL } from "./constants";
import Characters from "./components/Character";

const App = () => {
  const [characters, setCharacters] = useState(null);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`${BASE_URL}/people?api_key=${API_KEY}`)
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) =>
        console.log(
          err,
          "Something is wrong with your Star Wars api. Check axios call."
        )
      );
  }, []);

  if (!characters) return null;

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      {characters.map((character) => {
        return <Characters key={character.id} characters={character} />;
      })}
    </div>
  );
};

export default App;
