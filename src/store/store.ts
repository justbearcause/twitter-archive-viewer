import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { archiveReducer } from "./archive";

const appStore = configureStore({
  reducer: {
    archive: archiveReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

export { appStore };
export type AppState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
