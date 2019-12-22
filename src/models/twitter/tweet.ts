export default interface Tweet {
  retweeted:                  boolean;
  source:                     string;
  entities:                   Entities;
  display_text_range:         string[];
  favorite_count:             string;
  in_reply_to_status_id_str?: string;
  id_str:                     string;
  in_reply_to_user_id?:       string;
  truncated:                  boolean;
  retweet_count:              string;
  id:                         string;
  in_reply_to_status_id?:     string;
  created_at:                 string;
  favorited:                  boolean;
  full_text:                  string;
  lang:                       string;
  in_reply_to_screen_name?:   string;
  in_reply_to_user_id_str?:   string;
  possibly_sensitive?:        boolean;
  extended_entities?:         ExtendedEntities;
  coordinates?:               Coordinates;
  geo?:                       Coordinates;
}

export interface Coordinates {
  type:        string;
  coordinates: string[];
}

export interface Entities {
  hashtags:      Hashtag[];
  symbols:       any[];
  user_mentions: UserMention[];
  urls:          URL[];
  media?:        Media[];
}

export interface Hashtag {
  text:    string;
  indices: string[];
}

export interface Media {
  expanded_url:           string;
  indices:                string[];
  url:                    string;
  media_url:              string;
  id_str:                 string;
  id:                     string;
  media_url_https:        string;
  sizes:                  Sizes;
  type:                   Type;
  display_url:            string;
  source_status_id?:      string;
  source_user_id?:        string;
  source_user_id_str?:    string;
  source_status_id_str?:  string;
  video_info?:            VideoInfo;
  additional_media_info?: AdditionalMediaInfo;
}

export interface AdditionalMediaInfo {
  monetizable:  boolean;
  title?:       string;
  description?: string;
  embeddable?:  boolean;
}

export interface Sizes {
  thumb:  Large;
  medium: Large;
  small:  Large;
  large:  Large;
}

export interface Large {
  w:      string;
  h:      string;
  resize: Resize;
}

export enum Resize {
  Crop = "crop",
  Fit = "fit",
}

export enum Type {
  AnimatedGIF = "animated_gif",
  Photo = "photo",
  Video = "video",
}

export interface VideoInfo {
  aspect_ratio:     string[];
  duration_millis?: string;
  variants:         Variant[];
}

export interface Variant {
  bitrate?:     string;
  content_type: string;
  url:          string;
}

export interface URL {
  url:          string;
  expanded_url: string;
  display_url:  string;
  indices:      string[];
}

export interface UserMention {
  name:        string;
  screen_name: string;
  indices:     string[];
  id_str:      string;
  id:          string;
}

export interface ExtendedEntities {
  media: Media[];
}