export function Home() {
  return (
    <div className="bg-slate-800 w-[335px] h-screen grid grid-rows-6">
      <div className="w-full h-24 bg-slate-800 text-white text-2xl flex justify-center items-center">
        UserInfo
      </div>
      <div className="w-full h-24 bg-slate-800 text-white text-2xl flex justify-center items-center">
        SearchInput
      </div>
      <div className="w-full h-24 bg-slate-800 text-white text-2xl flex justify-center items-center">
        Icon buttons
      </div>
      <div className="w-full h-24 bg-slate-800 text-white text-2xl flex justify-center items-center">
        UpComing movies
      </div>
      <div className="grid row-start-6 content-center">
        {/* <NavigationBar /> */}
      </div>
    </div>
  );
}
