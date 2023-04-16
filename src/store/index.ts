import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReduser from "./reducers/userSlice";
import { cardApi } from "services/CardsService";
import searchReduser from "./reducers/searchSlice";

const rootReducer = combineReducers({
  userReduser,
  searchReduser,
  [cardApi.reducerPath]: cardApi.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cardApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
