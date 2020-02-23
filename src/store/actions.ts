import { SET_TWEETS, ArchiveActionTypes, SET_FOLLOWERS, SET_FOLLOWINGS, SET_ACCOUNT, SET_PROFILE, SET_AGE_INFO } from "./types";
import Tweet from "../models/twitter/tweet";
import Follower from "../models/twitter/follower";
import Following from "../models/twitter/following";
import Account from "../models/twitter/account";
import Profile from "../models/twitter/profile";
import AgeInfo from "../models/twitter/ageInfo";

export function setTweets(tweets: Tweet[]): ArchiveActionTypes {
    return {
        type: SET_TWEETS,
        payload: tweets
    }
}

export function setFollowers(followers: Follower[]): ArchiveActionTypes {
    return {
        type: SET_FOLLOWERS,
        payload: followers
    }
}

export function setFollowings(followings: Following[]): ArchiveActionTypes {
    return {
        type: SET_FOLLOWINGS,
        payload: followings
    }
}

export function setAccount(account?: Account): ArchiveActionTypes {
    return {
        type: SET_ACCOUNT,
        payload: account
    }
}

export function setProfile(profile?: Profile): ArchiveActionTypes {
    return {
        type: SET_PROFILE,
        payload: profile
    }
}

export function setAgeInfo(ageInfo?: AgeInfo): ArchiveActionTypes {
    return {
        type: SET_AGE_INFO,
        payload: ageInfo
    }
}