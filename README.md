# Pokedex

Pequeño frontend desarrollado utilizando React.

## Descripción

El código de este repositorio está construído de la siguiente manera:
* Utiliza GastsbyJS con React y StyledComponents
* Desploy en Gatsby Cloud https://pokedexmain80153.gatsbyjs.io/
* Pretende ser una réplica de https://www.pokemon.com/el/pokedex/
* Consume la API GraphQL de [PokeAPI](https://pokeapi.co/)

### PokeAPI GraphQL

Para consumir los datos se utiliza el siguiente query:
```graphql
{
  pokemon_v2_pokemon(limit: 12) {
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
```

## Ejecución
Para ejecutar el proyecto es necesario tener instalado:
* Gatsby CLI

### Makefile
Para levantar el servicio que ejecute localmente basta con ejecutar `make serve`
