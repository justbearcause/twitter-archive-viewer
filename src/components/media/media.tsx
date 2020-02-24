import React from "react";
import { TweetMediaModel } from "../../models/TweetModel";
import styles from "./media.module.css";

interface Props {
  media: TweetMediaModel;
}

export default (props: Props) => (
  <div className={styles.mediaContainer}>
    <a target="_blank" rel="noopener noreferrer" href={props.media.media_url}>
      <img
        className={styles.media}
        alt={props.media.display_url}
        src={props.media.media_url}
      />
    </a>
  </div>
);
