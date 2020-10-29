export const SET_ACCOUNT = "SET_ACCOUNT";
export const SET_PROFILE = "SET_PROFILE";
export const SET_AGE_INFO = "SET_AGE_INFO";
export const SET_AVATAR_IMAGE = "SET_AVATAR_IMAGE";
export const SET_BACKGROUND_IMAGE = "SET_BACKGROUND_IMAGE";

export interface UserState {
  phoneNumber?: string;
  email?: string;
  createdVia?: string;
  username?: string;
  accountId?: string;
  createdAt?: Date;
  accountDisplayName?: string;
  bio?: string;
  website?: string;
  location?: string;
  avatarMediaImageId?: string;
  headerMediaImageId?: string;
  age?: string[];
  birthDate?: Date;
}

export const initialState: UserState = {};
