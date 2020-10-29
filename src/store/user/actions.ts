import { createAction } from "@reduxjs/toolkit";
import { AccountModel, AgeInfoModel, ProfileModel } from "models";
import withPayloadType from "store/withPayloadType";
import {
  SET_ACCOUNT,
  SET_AGE_INFO,
  SET_AVATAR_IMAGE,
  SET_BACKGROUND_IMAGE,
  SET_PROFILE,
} from "./types";

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

export const setAvatarImage = createAction(
  SET_AVATAR_IMAGE,
  withPayloadType<string>()
);

export const setBackgroundImage = createAction(
  SET_BACKGROUND_IMAGE,
  withPayloadType<string>()
);
