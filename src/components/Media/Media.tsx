import { Image } from "components/Image";
import { TweetMediaModel, TweetModel } from "models";
import React from "react";
import { useAppDispatch } from "store";
import { showImage } from "store/archive";
import styles from "./Media.module.css";

type Props = {
  media: TweetMediaModel;
  tweet: TweetModel;
};

export const Media: React.FunctionComponent<Props> = ({ media, tweet }) => {
  const dispatch = useAppDispatch();

  const onImagePreviewToggle = () => {
    dispatch(showImage(media));
  };

  return (
    <div className={styles.container} onClick={onImagePreviewToggle}>
      <Image
        id={media.id}
        alt={media.display_url}
        className={styles.media}
        withSkeleton
        isLazy
        width={Number(media.sizes.large.w)}
        height={Number(media.sizes.large.h)}
      />
    </div>
  );
};
