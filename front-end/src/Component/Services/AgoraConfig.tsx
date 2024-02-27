import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-sdk-ng/esm";

//const appid="a566d38fde2942ce9459fc76e1349eac";
//const token  = null;

export const useClient=createClient({mode:"rtc",codec:"vp8"});
export const useMicrophoneAndCameraTracks=createMicrophoneAndCameraTracks();
export const channelName=" ";