import classNames from "classnames";
import { RetweetIcon } from "components/Icons";
import { Image } from "components/Image";
import { TweetModel } from "models";
import React, { useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { TweetMedia } from "../TweetMedia";
import styles from "./Tweet.module.css";
import { useTweet } from "./useTweet";

type Props = {
  tweet: TweetModel;
};

type PreviewState = "hidden" | "requested" | "loaded" | "errored";

export const Tweet: React.FunctionComponent<Props> = ({ tweet }) => {
  const [previewState, setPreviewState] = useState<PreviewState>("hidden");

  const {
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
  } = useTweet(tweet);

  const handlePreviewToggle = () => {
    setPreviewState((state) => (state === "hidden" ? "requested" : "hidden"));
  };

  const handlePreviewLoad = (element: any) => {
    setPreviewState(element ? "loaded" : "errored");
  };

  return (
    <div className={styles.tweet}>
      <div className={styles.avatarColumn}>
        {!isRetweet && (
          <a target="_blank" rel="noopener noreferrer" href={authorUrl}>
            {!!avatarImageId && (
              <Image
                className={styles.avatarImage}
                id={avatarImageId}
                alt={authorDisplayName || authorUserName || ""}
              />
            )}
          </a>
        )}
        {isRetweet && <RetweetIcon className={styles.retweetIcon} />}
      </div>
      <div className={styles.contentColumn}>
        <div className={styles.tweetInfo}>
          <div className={styles.authorInfo}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={authorUrl}
              className={styles.dimmed}
            >
              <span className={styles.authorName}>{authorDisplayName}</span>
              <span className={styles.authorUsername}>@{authorUserName}</span>
            </a>
            <span className={styles.dimmed} title={createdAtTime}>
              {createdAtDate}
            </span>
          </div>
        </div>
        <div className={styles.tweetText}>{tweetText}</div>
        {hasMedia && (
          <div>
            {tweet.extended_entities!.media.map((media) => (
              <TweetMedia key={media.id} media={media} />
            ))}
          </div>
        )}
        <div className={styles.tweetActions}>
          <a
            className={styles.dimmed}
            target="_blank"
            rel="noopener noreferrer"
            href={statusUrl}
          >
            View on Twitter
          </a>
          <button
            type="button"
            className={classNames(styles.linkButton, styles.dimmed)}
            onClick={handlePreviewToggle}
          >
            {previewState === "hidden" ? "Show a preview" : "Hide a preview"}
          </button>
        </div>

        {(previewState === "requested" || previewState === "loaded") && (
          <div
            className={classNames({
              [styles.embedHidden]: previewState === "requested",
            })}
          >
            <TwitterTweetEmbed tweetId={tweet.id} onLoad={handlePreviewLoad} />
          </div>
        )}
        {previewState === "requested" && (
          <div className={styles.embedPlaceholder}>
            Loading an embedded tweet...
          </div>
        )}
        {previewState === "errored" && (
          <div className={styles.embedError}>
            Error loading an embedded tweet.
            <br />
            It may be deleted or author made their account private.
          </div>
        )}
      </div>
    </div>
  );
};
