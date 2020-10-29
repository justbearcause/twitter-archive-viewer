import classNames from "classnames";
import { LikeIcon } from "components/Icons";
import LikeModel from "models/LikeModel";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch } from "store";
import { showModal } from "store/archive";
import styles from "./Like.module.css";

type OwnProps = {
  like: LikeModel;
};

type Props = OwnProps & ConnectedProps<typeof connector>;

const Like: React.FunctionComponent<Props> = (props) => {
  const { like } = props;

  const onPreviewToggle = () => {
    props.onModalOpen(renderIframe());
  };

  const renderIframe = () => {
    return (
      <iframe
        title={like.tweetId}
        frameBorder="0"
        src={`https://platform.twitter.com/embed/index.html?dnt=true&frame=false&hideThread=false&id=${like.tweetId}`}
      ></iframe>
    );
  };

  return (
    <div className={styles.tweet}>
      <div className={styles.avatarColumn}>
        <LikeIcon className={styles.likeIcon} />
      </div>
      <div className={styles.contentColumn}>
        <div className={styles.tweetInfo}>
          <div className={styles.authorInfo}>
            <span
              className={classNames(
                styles.dimmed,
                styles.tweetAction,
                styles.authorName
              )}
            >
              Liked tweet
            </span>
          </div>
        </div>
        <div className={styles.tweetText}>{like.fullText}</div>
        <div className={styles.tweetActions}>
          <a
            className={classNames(styles.dimmed, styles.tweetAction)}
            target="_blank"
            rel="noopener noreferrer"
            href={like.expandedUrl}
          >
            View on Twitter
          </a>
          <input
            type="button"
            value="Preview"
            className={classNames(
              styles.linkButton,
              styles.dimmed,
              styles.tweetAction
            )}
            onClick={onPreviewToggle}
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch: AppDispatch) => ({
  onModalOpen: (content: JSX.Element) => {
    dispatch(showModal(content));
  },
});

const connector = connect(null, mapDispatch);

export default connector(Like);
