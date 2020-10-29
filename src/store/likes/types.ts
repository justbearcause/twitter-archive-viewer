import LikeModel from "models/LikeModel";

export const SET_LIKES = "SET_LIKES";

export interface LikesState {
  likes: LikeModel[];
}

export const initialState: LikesState = {
  likes: [],
};
