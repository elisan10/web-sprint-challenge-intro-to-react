// Write your Character component here
// import axios from "axios";
import React from "react";
// import styled from "styled-components";
// import { API_KEY, BASE_URL } from "../constants";

const Character = ({ characters, open, close }) => {
  //   const [bio, setBio] = useState(null);

  //   useEffect(() => {
  //     axios
  //       .get(`${BASE_URL}/person/${characterId}?api_key=${API_KEY}`)
  //       .then((res) => {
  //         setBio(res.data.result);
  //       })
  //       .catch((err) =>
  //         console.log(
  //           err,
  //           "Something is wrong with getting the id. Check axios call for id."
  //         )
  //       );
  //   }, [characterId]);

  return (
    <div>
      <div className="name">
        <h2>{characters.name}</h2>
        {/* <button onClick={open}>Open</button> */}
      </div>

      <div className="bio">
        <h3>{characters.name}'s Bio</h3>
        <p>Birth Year: {characters.birth_year}</p>
        <p>Gender: {characters.gender}</p>
        <p>Height: {characters.height}</p>
        <p>Mass: {characters.mass}</p>
        {/* <button onClick={close}>Close</button> */}
      </div>
    </div>
  );
};

export default Character;
