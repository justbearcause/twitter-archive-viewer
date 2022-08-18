export const ADD_IMAGE = "ADD_IMAGE";
export const ADD_IMAGES = "ADD_IMAGES";
export const NEXT_IMAGE_SOURCE = "NEXT_IMAGE_SOURCE";

export interface Image {
  id: string;
  srcs: string[];
  activeIndex: number;
}

export interface ImageState {
  [id: string]: Image;
}

export const initialState: ImageState = {};
