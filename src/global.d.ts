import { YtdModel } from "./models";

declare global {
  interface Window {
    YTD: YtdModel;
  }
}
