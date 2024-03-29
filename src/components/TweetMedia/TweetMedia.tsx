import { Image } from "components/Image";
import React from "react";
import { useAppDispatch } from "store";
import { showImage } from "store/archive";
import { TweetMediaModel } from "../../models";
import styles from "./TweetMedia.module.css";

type Props = {
  media: TweetMediaModel;
};

export const TweetMedia: React.FunctionComponent<Props> = ({ media }) => {
  const dispatch = useAppDispatch();

  const onImagePreviewToggle = () => {
    dispatch(showImage(media));
  };

  return (
    <div className={styles.mediaContainer} onClick={onImagePreviewToggle}>
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
