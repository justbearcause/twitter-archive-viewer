import FollowerModel from "models/FollowerModel";
import FollowingModel from "models/FollowingModel";
import TweetModel from "models/TweetModel";

export const SET_TWEETS = "SET_TWEETS";
export const SET_FOLLOWINGS = "SET_FOLLOWINGS";
export const SET_FOLLOWERS = "SET_FOLLOWERS";
export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export interface ArchiveState {
  tweets: TweetModel[];
  followers: FollowerModel[];
  followings: FollowingModel[];
  isModalVisible: boolean;
  modalContent?: JSX.Element;
}

export const initialState: ArchiveState = {
  tweets: [],
  followers: [],
  followings: [],
  isModalVisible: false,
};
