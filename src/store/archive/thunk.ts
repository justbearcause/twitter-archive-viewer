import { TweetModel } from "models";
import { AppThunkDispatch, AppThunkResult } from "store";
import { addImages } from "store/images";
import { Image } from "store/images/types";
import { twitterDateTimeStringToMoment } from "utils/dateTimeUtils";
import { setTweets } from "./actions";

export const setTweetsThunk =
  (tweets: TweetModel[]): AppThunkResult =>
  async (dispatch: AppThunkDispatch) => {
    const images: Image[] = tweets
      .flatMap((tweet) =>
        (tweet.entities.media ?? []).map((media) => ({
          media,
          tweetId: tweet.id,
        }))
      )
      .map(({ media, tweetId }): Image => {
        const mediaUrls: string[] = [];
        const hashAndExtension = media.media_url.substr(
          media.media_url.lastIndexOf("/") + 1
        );

        mediaUrls.push(`archive/tweet_media/${tweetId}-${hashAndExtension}`);
        mediaUrls.push(media.media_url);

        return { id: media.id, srcs: mediaUrls, activeIndex: 0 };
      });

    dispatch(addImages(images));

    const orderedTweets = tweets
      .map((tweet) => ({
        createdAt: twitterDateTimeStringToMoment(tweet.created_at),
        tweet,
      }))
      .sort((a, b) => b.createdAt.diff(a.createdAt, "s"))
      .map((x) => x.tweet);

    dispatch(setTweets(orderedTweets));
  };
