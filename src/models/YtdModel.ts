import AccountModelWrapper from "./wrappers/AccountModelWrapper";
import AgeInfoModelWrapper from "./wrappers/AgeInfoModelWrapper";
import FollowersModelWrapper from "./wrappers/FollowersModelWrapper";
import FollowingModelWrapper from "./wrappers/FollowingModelWrapper";
import ProfileModelWrapper from "./wrappers/ProfileModelWrapper";
import TweetModelWrapper from "./wrappers/TweetModelWrapper";

export default interface YtdModel {
  tweet: TweetModelWrapper;
  account: AccountModelWrapper;
  profile: ProfileModelWrapper;
  ageinfo: AgeInfoModelWrapper;
  following: FollowingModelWrapper;
  follower: FollowersModelWrapper;
}
