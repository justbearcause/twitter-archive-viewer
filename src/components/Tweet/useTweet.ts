import { TweetModel } from "models";
import { AppState, useAppSelector } from "store";
import {
  twitterDateTimeStringToNormalDateString,
  twitterDateTimeStringToNormalTimeString,
} from "utils/dateTimeUtils";
import { prepareTweetText } from "./utils";

export const useTweet = (tweet: TweetModel) => {
  const user = useAppSelector((state: AppState) => state.user);

  const statusUrl = `https://twitter.com/${user.username}/status/${tweet.id}`;

  const hasMedia = !!tweet.extended_entities && !!tweet.extended_entities.media;

  const createdAtDate = twitterDateTimeStringToNormalDateString(
    tweet.created_at
  );
  const createdAtTime = twitterDateTimeStringToNormalTimeString(
    tweet.created_at
  );

  let isRetweet = false;
  let authorUserName = user.username;

  const retweetRegexp = /^RT @([^:]+)/i;
  const retweetMatch = tweet.full_text.match(retweetRegexp);

  if (retweetMatch && retweetMatch.length >= 2 && retweetMatch[1]) {
    isRetweet = true;
    authorUserName = retweetMatch[1];
  }

  const authorUrl = `https://twitter.com/${
    !isRetweet ? user.username : authorUserName
  }`;

  const authorDisplayName = !isRetweet ? user.accountDisplayName : "Retweet";

  const tweetText = prepareTweetText(tweet);

  const avatarImageId = user.avatarMediaImageId;

  return {
    authorDisplayName,
    authorUrl,
    authorUserName,
    avatarImageId,
    createdAtDate,
    createdAtTime,
    hasMedia,
    isRetweet,
    statusUrl,
    tweetText,
  };
};
