import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  querySearch: string;
}

const initialState: SearchState = {
  querySearch: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.querySearch = action.payload;
    },
  },
});

export default searchSlice.reducer;
