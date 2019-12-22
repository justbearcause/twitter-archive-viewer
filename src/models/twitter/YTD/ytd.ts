import ytdTweet from "./ytdTweet";
import ytdAccount from "./ytdAccount";
import ytdProfile from "./ytdProfile";
import ytdAgeInfo from "./ytdAgeInfo";
import ytdFollowing from "./ytdFollowing";
import ytdFollowers from "./ytdFollowers";

export default interface YTD {
    tweet: ytdTweet,
    account: ytdAccount,
    profile: ytdProfile,
    ageinfo: ytdAgeInfo,
    following: ytdFollowing,
    follower: ytdFollowers,
}