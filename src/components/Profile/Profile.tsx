import Image from "components/Image";
import Moment from "moment";
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { AppState } from "store";
import { BirthdayIcon, CalendarIcon, MapPinIcon } from "../Icons";
import ProfileAttribute from "../ProfileAttribute";
import ProfileCounter from "../ProfileCounter";
import styles from "./Profile.module.css";

type Props = ReturnType<typeof mapStateToProps>;

const Profile: FunctionComponent<Props> = (props) => {
  const { user, followersCount, followingsCount, tweetsCount } = props;

  return (
    <div>
      <div className={styles.profileBackgroundContainer}>
        {!!user.headerMediaImageId && (
          <Image
            id={user.headerMediaImageId}
            alt={user.accountDisplayName || ""}
            className={styles.profileBackground}
          />
        )}
      </div>
      <div className={styles.profileInfoContainer}>
        <div className={styles.profileAvatarRow}>
          <div className={styles.profileAvatarContainer}>
            {!!user.avatarMediaImageId && (
              <Image
                id={user.avatarMediaImageId}
                alt={user.accountDisplayName || ""}
                className={styles.profileAvatar}
              />
            )}
          </div>
        </div>
        <div className={styles.profileNameRow}>
          <div className={styles.profileDisplayName}>
            {user.accountDisplayName}
          </div>
          <div className={styles.profileUserName}>@{user.username}</div>
        </div>
        <div className={styles.profileAttributesRow}>
          {!!user.location && (
            <ProfileAttribute icon={<MapPinIcon />} text={user.location} />
          )}
          {!!user.birthDate && (
            <ProfileAttribute
              icon={<BirthdayIcon />}
              text={`Born ${Moment(user.birthDate, "YYYY-MM-DD").format(
                "MMMM DD, YYYY"
              )}`}
            />
          )}
          {!!user.createdAt && (
            <ProfileAttribute
              icon={<CalendarIcon />}
              text={`Joined ${Moment(user.createdAt).format("MMMM YYYY")}`}
            />
          )}
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

const mapStateToProps = (state: AppState) => ({
  user: state.user,
  followersCount: state.archive.followers.length,
  followingsCount: state.archive.followings.length,
  tweetsCount: state.archive.tweets.length,
});

export default connect(mapStateToProps)(Profile);
