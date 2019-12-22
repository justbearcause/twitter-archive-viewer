import ProfileDescription from "./profileDescription";

export default interface Profile {
  description: ProfileDescription;
  avatarMediaUrl: string;
  headerMediaUrl: string;
}