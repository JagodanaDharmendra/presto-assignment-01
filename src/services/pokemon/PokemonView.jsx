import * as React from "react";
import { useGetPokemonByNameQuery } from "./pokemon";

export default function PokemonView() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oh no, there was an error</div>;
  }

  if (data) {
    return (
      <div>
        <h3>{data.species.name}</h3>
        <img src={data.sprites.front_shiny} alt={data.species.name} />
      </div>
    );
  }

  return null;
}
