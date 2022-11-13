import { TweetHashtagModel, TweetModel, TweetUserMentionModel } from "models";
import React from "react";

const decodeHtmlEntities = (string: string) => {
  var textArea = document.createElement("textarea");
  textArea.innerHTML = string;
  return textArea.value;
};

export const prepareTweetText = (tweet: TweetModel) => {
  const text = decodeHtmlEntities(tweet.full_text);
  const replaces: any[] = [];

  tweet.entities.hashtags.forEach((hashtag: TweetHashtagModel) => {
    const url = `https://twitter.com/hashtag/${hashtag.text}`;
    const key = hashtag.indices[0];

    replaces.push({
      from: +hashtag.indices[0],
      to: +hashtag.indices[1],
      content: React.createElement(
        "a",
        { target: "_blank", rel: "noopener noreferrer", key, href: url },
        `#${hashtag.text}`
      ),
    });
  });

  tweet.entities.user_mentions.forEach((mention: TweetUserMentionModel) => {
    const url = `https://twitter.com/${mention.screen_name}`;
    const key = mention.indices[0];

    replaces.push({
      from: +mention.indices[0],
      to: +mention.indices[1],
      content: React.createElement(
        "a",
        { target: "_blank", rel: "noopener noreferrer", key, href: url },
        `@${mention.screen_name}`
      ),
    });
  });

  tweet.entities.urls.forEach((url) => {
    const key = url.indices[0];

    replaces.push({
      from: +url.indices[0],
      to: +url.indices[1],
      content: React.createElement(
        "a",
        {
          target: "_blank",
          rel: "noopener noreferrer",
          key,
          href: url.expanded_url,
        },
        url.display_url
      ),
    });
  });

  if (tweet.entities.media) {
    tweet.entities.media.forEach((media) => {
      const key = media.indices[0];

      replaces.push({
        from: +media.indices[0],
        to: +media.indices[1],
        content: React.createElement(
          "a",
          {
            target: "_blank",
            rel: "noopener noreferrer",
            key,
            href: media.media_url,
          },
          media.url
        ),
      });
    });
  }

  replaces.sort((a, b) => (a.from > b.from ? 1 : b.from > a.from ? -1 : 0));

  const parts = [];

  let currentIndex = 0;
  replaces.forEach((replace: any) => {
    if (replace.from !== currentIndex) {
      parts.push(
        React.createElement(
          "span",
          { key: currentIndex },
          " " + text.substring(currentIndex, replace.from) + " "
        )
      );
    } else if (currentIndex > 0) {
      parts.push(<span key={`${currentIndex}sep`}> </span>);
    }

    parts.push(replace.content);

    currentIndex = replace.to + 1;
  });

  if (currentIndex < text.length - 1) {
    parts.push(
      React.createElement(
        "span",
        { key: currentIndex },
        " " + text.substring(currentIndex)
      )
    );
  }

  return React.createElement(React.Fragment, {}, parts);
};
