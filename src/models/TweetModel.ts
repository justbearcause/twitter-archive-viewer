export default interface TweetModel {
  retweeted: boolean;
  source: string;
  entities: TweetEntitiesModel;
  display_text_range: string[];
  favorite_count: string;
  in_reply_to_status_id_str?: string;
  id_str: string;
  in_reply_to_user_id?: string;
  truncated: boolean;
  retweet_count: string;
  id: string;
  in_reply_to_status_id?: string;
  created_at: string;
  favorited: boolean;
  full_text: string;
  lang: string;
  in_reply_to_screen_name?: string;
  in_reply_to_user_id_str?: string;
  possibly_sensitive?: boolean;
  extended_entities?: TweetExtendedEntitiesModel;
  coordinates?: TweetCoordinatesModel;
  geo?: TweetCoordinatesModel;
}

export interface TweetCoordinatesModel {
  type: string;
  coordinates: string[];
}

export interface TweetEntitiesModel {
  hashtags: TweetHashtagModel[];
  symbols: any[];
  user_mentions: TweetUserMentionModel[];
  urls: TweetUrlModel[];
  media?: TweetMediaModel[];
}

export interface TweetHashtagModel {
  text: string;
  indices: string[];
}

export interface TweetMediaModel {
  expanded_url: string;
  indices: string[];
  url: string;
  media_url: string;
  id_str: string;
  id: string;
  media_url_https: string;
  sizes: TweetMediaSizesModel;
  type: TweetMediaTypeEnum;
  display_url: string;
  source_status_id?: string;
  source_user_id?: string;
  source_user_id_str?: string;
  source_status_id_str?: string;
  video_info?: TweetMediaVideoInfoModel;
  additional_media_info?: TweetAdditionalMediaInfoModel;
}

export interface TweetAdditionalMediaInfoModel {
  monetizable: boolean;
  title?: string;
  description?: string;
  embeddable?: boolean;
}

export interface TweetMediaSizesModel {
  thumb: TweetMediaSizeModel;
  medium: TweetMediaSizeModel;
  small: TweetMediaSizeModel;
  large: TweetMediaSizeModel;
}

export interface TweetMediaSizeModel {
  w: string;
  h: string;
  resize: TweetMediaResizeEnum;
}

export enum TweetMediaResizeEnum {
  Crop = "crop",
  Fit = "fit"
}

export enum TweetMediaTypeEnum {
  AnimatedGIF = "animated_gif",
  Photo = "photo",
  Video = "video"
}

export interface TweetMediaVideoInfoModel {
  aspect_ratio: string[];
  duration_millis?: string;
  variants: TweetMediaVideoVariantModel[];
}

export interface TweetMediaVideoVariantModel {
  bitrate?: string;
  content_type: string;
  url: string;
}

export interface TweetUrlModel {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: string[];
}

export interface TweetUserMentionModel {
  name: string;
  screen_name: string;
  indices: string[];
  id_str: string;
  id: string;
}

export interface TweetExtendedEntitiesModel {
  media: TweetMediaModel[];
}
