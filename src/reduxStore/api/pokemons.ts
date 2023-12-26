import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Config from "react-native-config";
import { PokemonListResp } from "reduxStore/models/pokemons";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: Config.BASE_URL }),
  endpoints: (builder) => ({
   getAllPokemons: builder.query<PokemonListResp,void>({
      query: () => ({
        url: "pokemon/",
				method: "GET"
      }),
    }),
    getPokemonsById: builder.query({
      query: (id) => {
        return `pokemon/${id}/`;
      },
    }),
  }),
});

// auto-generated hooks to be exported endpoints
export const {
  useGetAllPokemonsQuery,
  useGetPokemonsByIdQuery,
  usePrefetch,
} = pokemonApi;
