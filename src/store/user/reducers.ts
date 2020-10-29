import { createReducer } from "@reduxjs/toolkit";
import {
  setAccount,
  setAgeInfo,
  setAvatarImage,
  setBackgroundImage,
  setProfile,
} from "./actions";
import { initialState } from "./types";

const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setAccount, (state, action) => {
      state.phoneNumber = action.payload?.phoneNumber;
      state.email = action.payload?.email;
      state.createdVia = action.payload?.createdVia;
      state.username = action.payload?.username;
      state.accountId = action.payload?.accountId;
      state.createdAt = action.payload?.createdAt;
      state.accountDisplayName = action.payload?.accountDisplayName;
    })
    .addCase(setProfile, (state, action) => {
      state.bio = action.payload?.description?.bio;
      state.website = action.payload?.description?.website;
      state.location = action.payload?.description?.location;
    })
    .addCase(setAgeInfo, (state, action) => {
      state.age = action.payload?.age;
      state.birthDate = action.payload?.birthDate;
    })
    .addCase(setAvatarImage, (state, action) => {
      state.avatarMediaImageId = action.payload;
    })
    .addCase(setBackgroundImage, (state, action) => {
      state.headerMediaImageId = action.payload;
    })
    .addDefaultCase((state) => state)
);

export { userReducer };
