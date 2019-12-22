import YTD from "./models/twitter/YTD/ytd"

declare global {
    interface Window {
        YTD: YTD;
    }
}