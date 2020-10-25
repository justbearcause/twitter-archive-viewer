import { createReducer } from "@reduxjs/toolkit";
import {
  closeModal,
  setFollowers,
  setFollowings,
  setTweets,
  showModal,
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
    .addCase(showModal, (state, action) => {
      state.modalContent = action.payload;
      state.isModalVisible = true;
    })
    .addCase(closeModal, (state) => {
      state.isModalVisible = false;
      state.modalContent = undefined;
    })
    .addDefaultCase((state) => state)
);

export { archiveReducer };
