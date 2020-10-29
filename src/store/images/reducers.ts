import { createReducer } from "@reduxjs/toolkit";
import { addImage, nextImageSource } from "./actions";
import { initialState } from "./types";

const imageReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(addImage, (state, action) => {
      state[action.payload.id] = action.payload;
    })
    .addCase(nextImageSource, (state, action) => {
      const image = state[action.payload];
      if (image.activeIndex < image.srcs.length - 1) {
        image.activeIndex++;
      }
    })
    .addDefaultCase((state) => state)
);

export { imageReducer };
