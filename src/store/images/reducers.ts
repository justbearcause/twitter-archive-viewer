import { createReducer } from "@reduxjs/toolkit";
import { addImage, addImages, nextImageSource } from "./actions";
import { initialState } from "./types";

const imageReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(addImage, (state, action) => {
      state[action.payload.id] = action.payload;
    })
    .addCase(addImages, (state, action) => {
      const newImages = Object.fromEntries(
        action.payload.map((image) => [image.id, image])
      );
      return { ...state, ...newImages };
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
