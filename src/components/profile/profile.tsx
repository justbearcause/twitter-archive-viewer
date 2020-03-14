import Moment from "moment";
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { BirthdayIcon, CalendarIcon, MapPinIcon } from "../Icons";
import ProfileAttribute from "../ProfileAttribute";
import ProfileCounter from "../ProfileCounter";
import styles from "./Profile.module.css";

type Props = ReturnType<typeof mapStateToProps>;

const Profile: FunctionComponent<Props> = props => {
  const {
    account,
    ageInfo,
    profile,
    followersCount,
    followingsCount,
    tweetsCount
  } = props;

  if (!account) {
    return null;
  }

  const createdAt = Moment(account.createdAt).format("MMMM YYYY");
  const birthDate = ageInfo
    ? Moment(ageInfo.birthDate, "YYYY-MM-DD").format("MMMM DD, YYYY")
    : undefined;
  const location = profile ? profile.description.location : undefined;
  const avatarUrl = profile ? profile.avatarMediaUrl : undefined;
  const backgroundStyles = profile
    ? { style: { backgroundImage: `url("${profile.headerMediaUrl}")` } }
    : undefined;

  return (
    <div>
      <div
        className={styles.profileBackgroundContainer}
        {...backgroundStyles}
      />
      <div className={styles.profileInfoContainer}>
        <div className={styles.profileAvatarRow}>
          <div className={styles.profileAvatarContainer}>
            {!!avatarUrl && (
              <img className={styles.profileAvatar} src={avatarUrl} />
            )}
          </div>
        </div>
        <div className={styles.profileNameRow}>
          <div className={styles.profileDisplayName}>
            {account.accountDisplayName}
          </div>
          <div className={styles.profileUserName}>@{account.username}</div>
        </div>
        <div className={styles.profileAttributesRow}>
          {!!location && (
            <ProfileAttribute icon={<MapPinIcon />} text={location} />
          )}
          <ProfileAttribute
            icon={<BirthdayIcon />}
            text={`Born ${birthDate}`}
          />
          <ProfileAttribute
            icon={<CalendarIcon />}
            text={`Joined ${createdAt}`}
          />
        </div>
        <div className={styles.profileCountersRow}>
          <ProfileCounter text="Tweets" counter={tweetsCount} />
          <ProfileCounter text="Following" counter={followingsCount} />
          <ProfileCounter text="Followers" counter={followersCount} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  account: state.archive.account,
  profile: state.archive.profile,
  ageInfo: state.archive.ageInfo,
  followersCount: state.archive.followers.length,
  followingsCount: state.archive.followings.length,
  tweetsCount: state.archive.tweets.length
});

export default connect(mapStateToProps)(Profile);
