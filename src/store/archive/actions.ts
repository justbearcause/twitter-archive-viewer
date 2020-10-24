import { createAction } from "@reduxjs/toolkit";
import { FollowerModel, FollowingModel, TweetModel } from "models";
import withPayloadType from "store/withPayloadType";
import { SET_FOLLOWERS, SET_FOLLOWINGS, SET_TWEETS } from "./types";

export const setTweets = createAction(
  SET_TWEETS,
  withPayloadType<TweetModel[]>()
);

export const setFollowers = createAction(
  SET_FOLLOWERS,
  withPayloadType<FollowerModel[]>()
);

export const setFollowings = createAction(
  SET_FOLLOWINGS,
  withPayloadType<FollowingModel[]>()
);
