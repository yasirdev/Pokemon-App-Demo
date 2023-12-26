import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "reduxStore/api/pokemons";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 200 },
      serializableCheck: { warnAfter: 200 },
    }).concat(pokemonApi.middleware),
});