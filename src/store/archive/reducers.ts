import { createReducer } from "@reduxjs/toolkit";
import {
  closeModal,
  setFollowers,
  setFollowings,
  setTweets,
  showImage,
} from "./actions";
import { initialState } from "./types";

const archiveReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setTweets, (state, action) => {
      state.tweets = action.payload;
    })
    .addCase(setFollowers, (state, action) => {
      state.followers = action.payload;
    })
    .addCase(setFollowings, (state, action) => {
      state.followings = action.payload;
    })
    .addCase(showImage, (state, action) => {
      state.image = action.payload;
      state.isImageShown = true;
    })
    .addCase(closeModal, (state) => {
      state.isImageShown = false;
      state.image = undefined;
    })
    .addDefaultCase((state) => state)
);

export { archiveReducer };
