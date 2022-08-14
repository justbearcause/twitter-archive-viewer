import React, { PropsWithChildren, useEffect } from "react";
import { useAppDispatch } from "store";
import { setFollowers, setFollowings, setTweetsThunk } from "store/archive";
import { setLikes } from "store/likes";
import { setUserThunk } from "store/user";

export const ArchiveLoader = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTweetsThunk(getTweets()));
    dispatch(setFollowers(getFollowers()));
    dispatch(setFollowings(getFollowings()));
    dispatch(setUserThunk(getProfile(), getAccount(), getAgeInfo()));
    dispatch(setLikes(getLikes()));
  }, [dispatch]);

  return <>{children}</>;
};

const getTweets = () => {
  return window.YTD.tweet?.part0?.map((x) => x.tweet);
};

const getFollowers = () => {
  return window.YTD.follower?.part0?.map((x) => x.follower);
};

const getFollowings = () => {
  return window.YTD.following?.part0?.map((x) => x.following);
};

const getAccount = () => {
  return window.YTD.account?.part0?.shift()?.account;
};

const getProfile = () => {
  return window.YTD.profile?.part0?.shift()?.profile;
};

const getAgeInfo = () => {
  return window.YTD.ageinfo?.part0?.shift()?.ageMeta?.ageInfo;
};

const getLikes = () => {
  return window.YTD.like?.part0?.map((x) => x.like);
};
