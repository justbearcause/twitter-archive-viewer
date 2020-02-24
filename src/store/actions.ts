import AccountModel from "../models/AccountModel";
import AgeInfoModel from "../models/AgeInfoModel";
import FollowerModel from "../models/FollowerModel";
import FollowingModel from "../models/FollowingModel";
import ProfileModel from "../models/ProfileModel";
import TweetModel from "../models/TweetModel";
import {
  ArchiveActionTypes,
  SET_ACCOUNT,
  SET_AGE_INFO,
  SET_FOLLOWERS,
  SET_FOLLOWINGS,
  SET_PROFILE,
  SET_TWEETS
} from "./types";

export function setTweets(tweets: TweetModel[]): ArchiveActionTypes {
  return {
    type: SET_TWEETS,
    payload: tweets
  };
}

export function setFollowers(followers: FollowerModel[]): ArchiveActionTypes {
  return {
    type: SET_FOLLOWERS,
    payload: followers
  };
}

export function setFollowings(
  followings: FollowingModel[]
): ArchiveActionTypes {
  return {
    type: SET_FOLLOWINGS,
    payload: followings
  };
}

export function setAccount(account?: AccountModel): ArchiveActionTypes {
  return {
    type: SET_ACCOUNT,
    payload: account
  };
}

export function setProfile(profile?: ProfileModel): ArchiveActionTypes {
  return {
    type: SET_PROFILE,
    payload: profile
  };
}

export function setAgeInfo(ageInfo?: AgeInfoModel): ArchiveActionTypes {
  return {
    type: SET_AGE_INFO,
    payload: ageInfo
  };
}
