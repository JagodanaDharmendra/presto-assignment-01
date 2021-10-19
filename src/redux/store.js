import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./rootReducer";

// import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/pokemon/pokemon.js';

const store = configureStore({
  reducer: {
    ...rootReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
  ,
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

export default store;
