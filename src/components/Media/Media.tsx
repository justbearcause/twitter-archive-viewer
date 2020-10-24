import Image from "components/Image";
import React from "react";
import { TweetMediaModel } from "../../models";
import styles from "./Media.module.css";

interface Props {
  media: TweetMediaModel;
}

const Media: React.FunctionComponent<Props> = (props) => (
  <div className={styles.mediaContainer}>
    <a target="_blank" rel="noopener noreferrer" href={props.media.media_url}>
      <Image
        id={props.media.id}
        alt={props.media.display_url}
        className={styles.media}
      />
    </a>
  </div>
);

export default Media;
