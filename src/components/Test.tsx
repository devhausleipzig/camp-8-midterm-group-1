import { API } from "./API";
export function Test() {
  const data = new API();
  return <div>{data.NowPlayingArray("flex flex-col gap-2", "")}</div>;
}
