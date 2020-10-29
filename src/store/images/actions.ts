import { createAction } from "@reduxjs/toolkit";
import withPayloadType from "store/withPayloadType";
import { ADD_IMAGE, Image, NEXT_IMAGE_SOURCE } from "./types";

export const addImage = createAction(ADD_IMAGE, withPayloadType<Image>());

export const nextImageSource = createAction(
  NEXT_IMAGE_SOURCE,
  withPayloadType<string>()
);
