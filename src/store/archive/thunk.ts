import { TweetModel } from "models";
import { AppThunkDispatch, AppThunkResult } from "store";
import { addImage } from "store/images";
import { setTweets } from "./actions";

export const setTweetsThunk = (tweets: TweetModel[]): AppThunkResult => async (
  dispatch: AppThunkDispatch
) => {
  tweets.forEach((tweet) => {
    if (tweet.entities.media === undefined) {
      return;
    }

    tweet.entities.media.forEach((media) => {
      const mediaUrls: string[] = [];
      const hashAndExtension = media.media_url.substr(
        media.media_url.lastIndexOf("/") + 1
      );
      mediaUrls.push(`archive/tweet_media/${tweet.id}-${hashAndExtension}`);
      mediaUrls.push(media.media_url);

      dispatch(addImage({ id: media.id, srcs: mediaUrls, activeIndex: 0 }));
    });
  });

  dispatch(setTweets(tweets));
};
