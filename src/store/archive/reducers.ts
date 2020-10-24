import { createReducer } from "@reduxjs/toolkit";
import {
  AccountModel,
  AgeInfoModel,
  FollowerModel,
  FollowingModel,
  ProfileModel,
  TweetModel,
} from "models";
import {
  setAccount,
  setAgeInfo,
  setFollowers,
  setFollowings,
  setProfile,
  setTweets,
} from "./actions";

interface ArchiveState {
  tweets: TweetModel[];
  followers: FollowerModel[];
  followings: FollowingModel[];
  account?: AccountModel;
  profile?: ProfileModel;
  ageInfo?: AgeInfoModel;
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
    .addCase(setAccount, (state, action) => {
      state.account = action.payload;
    })
    .addCase(setProfile, (state, action) => {
      state.profile = action.payload;
    })
    .addCase(setAgeInfo, (state, action) => {
      state.ageInfo = action.payload;
    })
);

export { archiveReducer };
