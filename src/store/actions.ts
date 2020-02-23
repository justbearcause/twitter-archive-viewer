import Account from "../models/twitter/account";
import AgeInfo from "../models/twitter/ageInfo";
import Follower from "../models/twitter/follower";
import Following from "../models/twitter/following";
import Profile from "../models/twitter/profile";
import Tweet from "../models/twitter/tweet";
import {
  ArchiveActionTypes,
  SET_ACCOUNT,
  SET_AGE_INFO,
  SET_FOLLOWERS,
  SET_FOLLOWINGS,
  SET_PROFILE,
  SET_TWEETS
} from "./types";

export function setTweets(tweets: Tweet[]): ArchiveActionTypes {
  return {
    type: SET_TWEETS,
    payload: tweets
  };
}

export function setFollowers(followers: Follower[]): ArchiveActionTypes {
  return {
    type: SET_FOLLOWERS,
    payload: followers
  };
}

export function setFollowings(followings: Following[]): ArchiveActionTypes {
  return {
    type: SET_FOLLOWINGS,
    payload: followings
  };
}

export function setAccount(account?: Account): ArchiveActionTypes {
  return {
    type: SET_ACCOUNT,
    payload: account
  };
}

export function setProfile(profile?: Profile): ArchiveActionTypes {
  return {
    type: SET_PROFILE,
    payload: profile
  };
}

export function setAgeInfo(ageInfo?: AgeInfo): ArchiveActionTypes {
  return {
    type: SET_AGE_INFO,
    payload: ageInfo
  };
}
