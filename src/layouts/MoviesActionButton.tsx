export default function MoviesActionButton() {
  return (
    <div className="flex items-center gap-[1.25rem]">
      <div className="w-[64px] h-[64px] bg-white"></div>
      <div className="flex flex-col">
        <p className=" text-white">Actor Name</p>
        <p className=" text-white-dimmed">Character</p>
      </div>
    </div>
  );
}
