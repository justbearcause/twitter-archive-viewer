import ytdAccount from "./ytdAccount";
import ytdAgeInfo from "./ytdAgeInfo";
import ytdFollowers from "./ytdFollowers";
import ytdFollowing from "./ytdFollowing";
import ytdProfile from "./ytdProfile";
import ytdTweet from "./ytdTweet";

export default interface YTD {
  tweet: ytdTweet;
  account: ytdAccount;
  profile: ytdProfile;
  ageinfo: ytdAgeInfo;
  following: ytdFollowing;
  follower: ytdFollowers;
}
