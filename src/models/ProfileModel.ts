import ProfileDescriptionModel from "./ProfileDescriptionModel";

export default interface ProfileModel {
  description: ProfileDescriptionModel;
  avatarMediaUrl: string;
  headerMediaUrl: string;
}
