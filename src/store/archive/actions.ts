import { createAction } from "@reduxjs/toolkit";
import {
  FollowerModel,
  FollowingModel,
  TweetMediaModel,
  TweetModel,
} from "models";
import withPayloadType from "store/withPayloadType";
import {
  CLOSE_MODAL,
  SET_FOLLOWERS,
  SET_FOLLOWINGS,
  SET_TWEETS,
  SHOW_MODAL,
} from "./types";

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

export const showImage = createAction(
  SHOW_MODAL,
  withPayloadType<TweetMediaModel>()
);

export const closeModal = createAction(CLOSE_MODAL);
