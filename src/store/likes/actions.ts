import { createAction } from "@reduxjs/toolkit";
import LikeModel from "models/LikeModel";
import withPayloadType from "store/withPayloadType";
import { SET_LIKES } from "./types";

export const setLikes = createAction(SET_LIKES, withPayloadType<LikeModel[]>());
