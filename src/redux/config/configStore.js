import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "../modules/boardSlice";
import userSlice from "../modules/userSlice";

const store = configureStore({
  reducer: {
    boardSlice: boardSlice,
    userSlice: userSlice,
  },
});

export default store;
