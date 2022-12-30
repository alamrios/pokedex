import React, {useState, useEffect} from "react"
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import Styled from '../components/styled';

const endpoint = "https://beta.pokeapi.co/graphql/v1beta";

const generateQuery = (limit) => {
    return gql`
    {
        pokemon_v2_pokemon(limit: `+limit+`) {
            id
            name
            pokemon_v2_pokemonsprites {
                id
                sprites
            }
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                }
            }
        }
    }
    `
}

const PokemonsView: React.FC = () => {
    const { data, isLoading, error } = useQuery("pokemons", () => {
        return request(endpoint, generateQuery(12));
    });

    if (isLoading) return <pre>Loading...</pre>;
    if (error) return <pre>{error.message}</pre>;

    return (
        <div>
            {data.pokemon_v2_pokemon.map((pokemon) => (
                <Styled.PokemonWrapper key={pokemon.id}>
                    <Styled.PokemonSprite src={JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites).front_default} alt={pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default} />
                    <Styled.PokemonName>{pokemon.name}</Styled.PokemonName>
                    <Styled.PokemonTypesWrapper>
                        {pokemon.pokemon_v2_pokemontypes.map((pokemonType) => {
                            return (
                                <Styled.PokemonType type={pokemonType.pokemon_v2_type.name} key={pokemonType.pokemon_v2_type.name}>
                                    {pokemonType.pokemon_v2_type.name}
                                </Styled.PokemonType>
                            )
                        })}
                    </Styled.PokemonTypesWrapper>
                </Styled.PokemonWrapper>
            ))}
        </div>
    );
};

export default PokemonsView;