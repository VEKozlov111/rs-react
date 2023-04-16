import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "types/types";

interface UserState {
  users: IUser[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.users = [...state.users, action.payload];
    },
  },
});

export default userSlice.reducer;
