import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState<any>();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((response) => response.json())
      .then((data) => (
        console.log(data),
        setPokemon(data)
      ))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>Mathias site</h1>
      {pokemon && <img src={pokemon.sprites.front_default} alt="" />}
      
    </div>
  );
}

export default App;
