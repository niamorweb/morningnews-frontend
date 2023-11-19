import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addToBookmarks: (state, action) => {
      state.value.push(action.payload);
    },
    removeToBookmarks: (state, action) => {
      state.value = state.value.filter((item) => item.title !== action.payload);
    },
  },
});

export const { addToBookmarks, removeToBookmarks } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
