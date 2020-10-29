import moment from "moment";

export const twitterDateTimeStringToNormalDateString = (
  twitterDateTimeString: string
) => twitterDateTimeStringToMoment(twitterDateTimeString).format("MMM DD YYYY");

export const twitterDateTimeStringToNormalTimeString = (
  twitterDateTimeString: string
) => twitterDateTimeStringToMoment(twitterDateTimeString).format("HH:mm");

export const twitterDateTimeStringToMoment = (twitterDateTimeString: string) =>
  moment(twitterDateTimeString, "dd MMM DD HH:mm:ss ZZ YYYY", "en");
