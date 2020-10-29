import Image from "components/Image";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch } from "store";
import { showModal } from "store/archive";
import { TweetMediaModel } from "../../models";
import styles from "./Media.module.css";

type OwnProps = {
  media: TweetMediaModel;
};

type Props = OwnProps & ConnectedProps<typeof connector>;

const Media: React.FunctionComponent<Props> = (props) => {
  const onImagePreviewToggle = () => {
    props.onModalOpen(image);
  };

  const image = (
    <Image
      id={props.media.id}
      alt={props.media.display_url}
      className={styles.media}
    />
  );

  return (
    <div className={styles.mediaContainer} onClick={onImagePreviewToggle}>
      {image}
    </div>
  );
};

const mapDispatch = (dispatch: AppDispatch) => ({
  onModalOpen: (content: JSX.Element) => {
    dispatch(showModal(content));
  },
});

const connector = connect(null, mapDispatch);

export default connector(Media);
