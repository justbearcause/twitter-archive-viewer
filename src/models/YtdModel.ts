import {
  AccountModelWrapper,
  AgeInfoModelWrapper,
  FollowerModelWrapper,
  FollowingModelWrapper,
  ProfileModelWrapper,
  TweetModelWrapper
} from "./wrappers";

export default interface YtdModel {
  tweet: TweetModelWrapper;
  account: AccountModelWrapper;
  profile: ProfileModelWrapper;
  ageinfo: AgeInfoModelWrapper;
  following: FollowingModelWrapper;
  follower: FollowerModelWrapper;
}
