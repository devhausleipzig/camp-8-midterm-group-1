import { SearchBar } from "../components/SearchBar";
import { UserInfo } from "../components/UserInfo";

export function Home() {
  return (
    <div className="w-96 grid grid-rows-6">
      <div className="w-full h-24 text-white text-2xl flex justify-center items-center">
        <UserInfo name={""} image={""}></UserInfo>
      </div>
      <div className="w-full h-24 text-white text-2xl flex justify-center items-center">
        <SearchBar></SearchBar>
      </div>
      <div className="w-full h-24 text-white text-2xl flex justify-center items-center">
        Icon buttons
      </div>
      <div className="w-full h-24 text-white text-2xl flex justify-center items-center">
        UpComing movies
      </div>
    </div>
  );
}
