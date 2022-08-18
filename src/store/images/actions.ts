import { createAction } from "@reduxjs/toolkit";
import withPayloadType from "store/withPayloadType";
import { ADD_IMAGE, ADD_IMAGES, Image, NEXT_IMAGE_SOURCE } from "./types";

export const addImage = createAction(ADD_IMAGE, withPayloadType<Image>());
export const addImages = createAction(ADD_IMAGES, withPayloadType<Image[]>());

export const nextImageSource = createAction(
  NEXT_IMAGE_SOURCE,
  withPayloadType<string>()
);
