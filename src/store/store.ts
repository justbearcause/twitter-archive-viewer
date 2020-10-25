import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { archiveReducer } from "./archive";
import { imageReducer } from "./images";
import { likesReducer } from "./likes";
import { userReducer } from "./user";

const appStore = configureStore({
  reducer: {
    archive: archiveReducer,
    user: userReducer,
    images: imageReducer,
    likes: likesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
  devTools: true,
});

export { appStore };
export type AppState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunkResult<R = Promise<void>> = ThunkAction<
  R,
  AppState,
  unknown,
  Action<string>
>;
export type AppThunkDispatch = typeof appStore.dispatch;
