import YtdModel from "./models/YtdModel";

declare global {
  interface Window {
    YTD: YtdModel;
  }
}
