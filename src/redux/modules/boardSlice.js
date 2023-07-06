import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

const initialState = [];

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push({
        id: shortid.generate(),
        title: action.payload.title,
        contents: action.payload.contents,
        writerId: action.payload.writerId,
        isDeleted: false,
      });
    },
  },
});

export const { addPost } = boardSlice.actions;
export default boardSlice.reducer;
