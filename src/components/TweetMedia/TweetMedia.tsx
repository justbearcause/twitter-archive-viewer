import { Image } from "components/Image";
import React from "react";
import { useAppDispatch } from "store";
import { showModal } from "store/archive";
import { TweetMediaModel } from "../../models";
import styles from "./TweetMedia.module.css";

type Props = {
  media: TweetMediaModel;
};

export const TweetMedia: React.FunctionComponent<Props> = ({ media }) => {
  const dispatch = useAppDispatch();

  const onImagePreviewToggle = () => {
    dispatch(
      showModal(
        <Image
          id={media.id}
          alt={media.display_url}
          className={styles.fullMedia}
        />
      )
    );
  };

  return (
    <div className={styles.mediaContainer} onClick={onImagePreviewToggle}>
      <Image id={media.id} alt={media.display_url} className={styles.media} />
    </div>
  );
};
