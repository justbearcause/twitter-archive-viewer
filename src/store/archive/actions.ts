import { createAction } from "@reduxjs/toolkit";
import { FollowerModel, FollowingModel, TweetModel } from "models";
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

export const showModal = createAction(
  SHOW_MODAL,
  withPayloadType<JSX.Element>()
);

export const closeModal = createAction(CLOSE_MODAL);
