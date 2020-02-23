import Account from "../models/twitter/account";
import AgeInfo from "../models/twitter/ageInfo";
import Follower from "../models/twitter/follower";
import Following from "../models/twitter/following";
import Profile from "../models/twitter/profile";
import Tweet from "../models/twitter/tweet";

export const SET_TWEETS = "SET_TWEETS";
export const SET_FOLLOWINGS = "SET_FOLLOWINGS";
export const SET_FOLLOWERS = "SET_FOLLOWERS";
export const SET_ACCOUNT = "SET_ACCOUNT";
export const SET_PROFILE = "SET_PROFILE";
export const SET_AGE_INFO = "SET_AGE_INFO";

export interface ArchiveState {
  tweets: Tweet[];
  followers: Follower[];
  followings: Following[];
  account?: Account;
  profile?: Profile;
  ageInfo?: AgeInfo;
}

interface SetTweetsAction {
  type: typeof SET_TWEETS;
  payload: Tweet[];
}

interface SetFollowingsAction {
  type: typeof SET_FOLLOWINGS;
  payload: Follower[];
}

interface SetFollowersAction {
  type: typeof SET_FOLLOWERS;
  payload: Following[];
}

interface SetAccountAction {
  type: typeof SET_ACCOUNT;
  payload?: Account;
}

interface SetProfileAction {
  type: typeof SET_PROFILE;
  payload?: Profile;
}

interface SetAgeInfoAction {
  type: typeof SET_AGE_INFO;
  payload?: AgeInfo;
}

export type ArchiveActionTypes =
  | SetTweetsAction
  | SetFollowingsAction
  | SetFollowersAction
  | SetAccountAction
  | SetProfileAction
  | SetAgeInfoAction;
