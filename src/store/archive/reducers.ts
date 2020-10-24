import { createReducer } from "@reduxjs/toolkit";
import { FollowerModel, FollowingModel, TweetModel } from "models";
import { setFollowers, setFollowings, setTweets } from "./actions";

interface ArchiveState {
  tweets: TweetModel[];
  followers: FollowerModel[];
  followings: FollowingModel[];
}

const initialState: ArchiveState = {
  tweets: [],
  followers: [],
  followings: [],
};

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
    .addDefaultCase((state) => state)
);

export { archiveReducer };
