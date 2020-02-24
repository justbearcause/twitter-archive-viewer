import AccountModel from "../models/AccountModel";
import AgeInfoModel from "../models/AgeInfoModel";
import FollowerModel from "../models/FollowerModel";
import FollowingModel from "../models/FollowingModel";
import ProfileModel from "../models/ProfileModel";
import TweetModel from "../models/TweetModel";

export const SET_TWEETS = "SET_TWEETS";
export const SET_FOLLOWINGS = "SET_FOLLOWINGS";
export const SET_FOLLOWERS = "SET_FOLLOWERS";
export const SET_ACCOUNT = "SET_ACCOUNT";
export const SET_PROFILE = "SET_PROFILE";
export const SET_AGE_INFO = "SET_AGE_INFO";

export interface ArchiveState {
  tweets: TweetModel[];
  followers: FollowerModel[];
  followings: FollowingModel[];
  account?: AccountModel;
  profile?: ProfileModel;
  ageInfo?: AgeInfoModel;
}

interface SetTweetsAction {
  type: typeof SET_TWEETS;
  payload: TweetModel[];
}

interface SetFollowingsAction {
  type: typeof SET_FOLLOWINGS;
  payload: FollowerModel[];
}

interface SetFollowersAction {
  type: typeof SET_FOLLOWERS;
  payload: FollowingModel[];
}

interface SetAccountAction {
  type: typeof SET_ACCOUNT;
  payload?: AccountModel;
}

interface SetProfileAction {
  type: typeof SET_PROFILE;
  payload?: ProfileModel;
}

interface SetAgeInfoAction {
  type: typeof SET_AGE_INFO;
  payload?: AgeInfoModel;
}

export type ArchiveActionTypes =
  | SetTweetsAction
  | SetFollowingsAction
  | SetFollowersAction
  | SetAccountAction
  | SetProfileAction
  | SetAgeInfoAction;
