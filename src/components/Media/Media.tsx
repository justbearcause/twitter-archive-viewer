import { Image } from "components/Image";
import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "store/archive";
import { TweetMediaModel } from "../../models";
import styles from "./Media.module.css";

type Props = {
  media: TweetMediaModel;
};

export const Media: React.FunctionComponent<Props> = ({ media }) => {
  const dispatch = useDispatch();

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
