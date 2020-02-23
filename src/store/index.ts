import { combineReducers } from "redux";
import { archiveReducer } from "./reducers";

export const rootReducer = combineReducers({
  archive: archiveReducer
});

export type RootState = ReturnType<typeof rootReducer>;
