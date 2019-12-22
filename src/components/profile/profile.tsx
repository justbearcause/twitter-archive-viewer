import React from "react";
import Moment from "moment";
import ProfileAttribute from "../profileAttribute/profileAttribute";
import ProfileCounter from "../profileCounter/profileCounter";
import { MapPinIcon, BirthdayIcon, CalendarIcon } from "../icons/icons";
import Account  from "../../models/twitter/account";
import AgeInfo  from "../../models/twitter/ageInfo";
import ProfileModel from "../../models/twitter/profile";
import Follower  from "../../models/twitter/follower";
import Following  from "../../models/twitter/following";

import styles from "./profile.module.css";

export class ProfileProps {
  account?: Account;
  profile?: ProfileModel;
  ageInfo?: AgeInfo;
  followers: Follower[] = [];
  followings: Following[] = [];
}

export default (props: ProfileProps) => {
  const { account, ageInfo, profile, followers, followings } = props;

  if (!account) {
    return null;
  }

  const createdAt = Moment(account.createdAt).format("MMMM YYYY");
  const birthDate = ageInfo ? Moment(ageInfo.birthDate, "YYYY-MM-DD").format("MMMM DD, YYYY") : undefined;
  const location = profile ? profile.description.location : undefined;
  const avatarUrl = profile ? profile.avatarMediaUrl : undefined;  
  const backgroundStyles = profile ? { style: { backgroundImage: `url("${profile.headerMediaUrl}")` } } : undefined;

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
          <div className={styles.profileUserName}>
            @{account.username}
          </div>
        </div>
        <div className={styles.profileAttributesRow}>
          {!!location && (
            <ProfileAttribute
              icon={<MapPinIcon />}
              text={location}
            />
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
          <ProfileCounter
            text="Following"
            counter={followings.length}
          />
          <ProfileCounter
            text="Followers"
            counter={followers.length}
          />
        </div>
      </div>
    </div>
  );
};
