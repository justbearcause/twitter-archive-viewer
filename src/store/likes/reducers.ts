import { createReducer } from "@reduxjs/toolkit";
import { setLikes } from "./actions";
import { initialState } from "./types";

const likesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setLikes, (state, action) => {
      state.likes = action.payload;
    })
    .addDefaultCase((state) => state)
);

export { likesReducer };
