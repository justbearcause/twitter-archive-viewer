import { AccountModel, AgeInfoModel, ProfileModel } from "models";
import { AppThunkDispatch, AppThunkResult } from "store";
import { addImage } from "store/images";
import { v4 as uuid } from "uuid";
import {
  setAccount,
  setAgeInfo,
  setAvatarImage,
  setBackgroundImage,
  setProfile,
} from "./actions";

export const setUserThunk = (
  profile?: ProfileModel,
  account?: AccountModel,
  ageInfo?: AgeInfoModel
): AppThunkResult => async (dispatch: AppThunkDispatch) => {
  dispatch(setAccount(account));
  dispatch(setProfile(profile));
  dispatch(setAgeInfo(ageInfo));

  const avatarMediaUrls: string[] = [];
  if (profile?.avatarMediaUrl && account?.accountId) {
    const hashAndExtension = profile.avatarMediaUrl.substr(
      profile.avatarMediaUrl.lastIndexOf("/") + 1
    );
    avatarMediaUrls.push(
      `archive/profile_media/${account?.accountId}-${hashAndExtension}`
    );
    avatarMediaUrls.push(profile.avatarMediaUrl);
  }
  if (avatarMediaUrls.length) {
    const id = uuid();
    dispatch(addImage({ id, srcs: avatarMediaUrls, activeIndex: 0 }));
    dispatch(setAvatarImage(id));
  }

  const headerMediaUrls: string[] = [];
  if (profile?.headerMediaUrl && account?.accountId) {
    const hash = profile.headerMediaUrl.substr(
      profile.headerMediaUrl.lastIndexOf("/") + 1
    );
    headerMediaUrls.push(
      `archive/profile_media/${account.accountId}-${hash}.jpg`
    );
    headerMediaUrls.push(profile.headerMediaUrl);
  }
  if (headerMediaUrls.length) {
    const id = uuid();
    dispatch(addImage({ id, srcs: headerMediaUrls, activeIndex: 0 }));
    dispatch(setBackgroundImage(id));
  }
};
