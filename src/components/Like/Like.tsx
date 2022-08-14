import classNames from "classnames";
import { LikeIcon } from "components/Icons";
import LikeModel from "models/LikeModel";
import React, { useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import styles from "./Like.module.css";

type Props = {
  like: LikeModel;
};

type PreviewState = "hidden" | "requested" | "loaded" | "errored";

export const Like: React.FunctionComponent<Props> = (props) => {
  const { like } = props;
  const [previewState, setPreviewState] = useState<PreviewState>("hidden");

  const handlePreviewToggle = () => {
    setPreviewState((state) => (state === "hidden" ? "requested" : "hidden"));
  };

  const handlePreviewLoad = (element: any) => {
    setPreviewState(element ? "loaded" : "errored");
  };

  return (
    <div className={styles.tweet}>
      <div className={styles.avatarColumn}>
        <LikeIcon className={styles.likeIcon} />
      </div>
      <div className={styles.contentColumn}>
        <div className={styles.tweetInfo}>
          <div className={styles.authorInfo}>
            <span className={classNames(styles.dimmed, styles.authorName)}>
              Liked tweet
            </span>
          </div>
        </div>
        <div className={styles.tweetText}>{like.fullText}</div>
        <div className={styles.tweetActions}>
          <a
            className={classNames(styles.dimmed)}
            target="_blank"
            rel="noopener noreferrer"
            href={like.expandedUrl}
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
            <TwitterTweetEmbed
              tweetId={like.tweetId}
              onLoad={handlePreviewLoad}
            />
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
