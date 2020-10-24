import { createAction } from "@reduxjs/toolkit";
import {
  AccountModel,
  AgeInfoModel,
  FollowerModel,
  FollowingModel,
  ProfileModel,
  TweetModel,
} from "models";
import withPayloadType from "store/withPayloadType";
import {
  SET_ACCOUNT,
  SET_AGE_INFO,
  SET_FOLLOWERS,
  SET_FOLLOWINGS,
  SET_PROFILE,
  SET_TWEETS,
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

export const setAccount = createAction(
  SET_ACCOUNT,
  withPayloadType<AccountModel | undefined>()
);

export const setProfile = createAction(
  SET_PROFILE,
  withPayloadType<ProfileModel | undefined>()
);

export const setAgeInfo = createAction(
  SET_AGE_INFO,
  withPayloadType<AgeInfoModel | undefined>()
);
