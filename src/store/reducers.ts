import { ArchiveState, ArchiveActionTypes, SET_TWEETS, SET_FOLLOWERS, SET_FOLLOWINGS, SET_PROFILE, SET_ACCOUNT, SET_AGE_INFO } from "./types";

const initialState: ArchiveState = {
    tweets: [],
    followers: [],
    followings: [],
};

export function archiveReducer(state = initialState, action: ArchiveActionTypes): ArchiveState {
    switch (action.type) {
        case SET_TWEETS:
            return {
                ...state,
                tweets: action.payload
            };
        case SET_FOLLOWERS:
            return {
                ...state,
                followers: action.payload
            };
        case SET_FOLLOWINGS:
            return {
                ...state,
                followings: action.payload
            };
        case SET_ACCOUNT:
            return {
                ...state,
                account: action.payload
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload
            };
        case SET_AGE_INFO:
            return {
                ...state,
                ageInfo: action.payload
            };
        default:
            return state;
    }
};