import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReduser from "./reducers/userSlice";

const rootReducer = combineReducers({
  userReduser,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
