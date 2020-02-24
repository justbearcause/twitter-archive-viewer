import Moment from "moment";
import React from "react";
import { connect } from "react-redux";
import TweetModel, {
  TweetHashtagModel,
  TweetUserMentionModel
} from "../../models/TweetModel";
import { RootState } from "../../store";
import Media from "../media/media";
import styles from "./tweet.module.css";

type OwnProps = {
  tweet: TweetModel;
};

type Props = OwnProps & ReturnType<typeof mapStateToProps>;

class Tweet extends React.Component<Props> {
  public render() {
    const { tweet, author, profile } = this.props;

    const statusUrl = `https://twitter.com/${author?.username}/status/${tweet.id}`;
    const authorUrl = `https://twitter.com/${author?.username}`;
    const hasMedia =
      !!tweet.extended_entities && !!tweet.extended_entities.media;

    const createdAtDate = this._twitterDateTimeStringToNormalDateString(
      tweet.created_at
    );
    const createdAtTime = this._twitterDateTimeStringToNormalTimeString(
      tweet.created_at
    );

    return (
      <div className={styles.tweet}>
        <div className={styles.avatarColumn}>
          <a target="_blank" rel="noopener noreferrer" href={authorUrl}>
            <img
              className={styles.avatarImage}
              src={profile?.avatarMediaUrl}
              alt={author?.accountDisplayName}
            />
          </a>
        </div>
        <div className={styles.contentColumn}>
          <div className={styles.authorInfo}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={authorUrl}
              className={styles.dimmed}
            >
              <span className={styles.authorName}>
                {author?.accountDisplayName}
              </span>
              <span className={styles.authorUsername}>@{author?.username}</span>
            </a>
            <a
              className={styles.dimmed}
              target="_blank"
              rel="noopener noreferrer"
              href={statusUrl}
              title={createdAtTime}
            >
              {createdAtDate}
            </a>
          </div>
          <div className={styles.tweetText}>
            {this._prepareTweetText(tweet)}
          </div>
          {hasMedia && (
            <div className={styles.attachments}>
              {tweet.extended_entities!.media.map(media => (
                <Media key={media.id} media={media} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  private decodeHtmlEntities = (string: string) => {
    var textArea = document.createElement("textarea");
    textArea.innerHTML = string;
    return textArea.value;
  };

  private _prepareTweetText(tweet: TweetModel) {
    const text = this.decodeHtmlEntities(tweet.full_text);
    const replaces: any[] = [];

    tweet.entities.hashtags.forEach((hashtag: TweetHashtagModel) => {
      const url = `https://twitter.com/hashtag/${hashtag.text}`;
      const key = hashtag.indices[0];

      replaces.push({
        from: +hashtag.indices[0],
        to: +hashtag.indices[1],
        content: (
          <a target="_blank" rel="noopener noreferrer" key={key} href={url}>
            #{hashtag.text}
          </a>
        )
      });
    });

    tweet.entities.user_mentions.forEach((mention: TweetUserMentionModel) => {
      const url = `https://twitter.com/${mention.screen_name}`;
      const key = mention.indices[0];

      replaces.push({
        from: +mention.indices[0],
        to: +mention.indices[1],
        content: (
          <a target="_blank" rel="noopener noreferrer" key={key} href={url}>
            @{mention.screen_name}
          </a>
        )
      });
    });

    tweet.entities.urls.forEach(url => {
      const key = url.indices[0];

      replaces.push({
        from: +url.indices[0],
        to: +url.indices[1],
        content: (
          <a target="_blank" rel="noopener noreferrer" key={key} href={url.url}>
            {url.display_url}
          </a>
        )
      });
    });

    if (tweet.entities.media) {
      tweet.entities.media.forEach(media => {
        const key = media.indices[0];

        replaces.push({
          from: +media.indices[0],
          to: +media.indices[1],
          content: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={key}
              href={media.media_url}
            >
              {media.url}
            </a>
          )
        });
      });
    }

    replaces.sort((a, b) => (a.from > b.from ? 1 : b.from > a.from ? -1 : 0));

    const parts = [];

    let currentIndex = 0;
    replaces.forEach((replace: any) => {
      if (replace.from !== currentIndex) {
        parts.push(
          <span key={currentIndex}>
            {" " + text.substring(currentIndex, replace.from) + " "}
          </span>
        );
      } else if (currentIndex > 0) {
        parts.push(<span key={`${currentIndex}sep`}> </span>);
      }

      parts.push(replace.content);

      currentIndex = replace.to + 1;
    });

    if (currentIndex < text.length - 1) {
      parts.push(
        <span key={currentIndex}>{" " + text.substring(currentIndex)}</span>
      );
    }

    return <React.Fragment>{parts}</React.Fragment>;
  }

  private _twitterDateTimeStringToNormalDateString = (
    twitterDateString: string
  ) =>
    Moment(twitterDateString, "dd MMM DD HH:mm:ss ZZ YYYY", "en").format(
      "MMM DD YYYY"
    );

  private _twitterDateTimeStringToNormalTimeString = (
    twitterDateString: string
  ) =>
    Moment(twitterDateString, "dd MMM DD HH:mm:ss ZZ YYYY", "en").format(
      "HH:mm"
    );
}

const mapStateToProps = (state: RootState) => ({
  author: state.archive.account,
  profile: state.archive.profile
});

export default connect(mapStateToProps)(Tweet);
