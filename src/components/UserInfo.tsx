import { redirect, useNavigate } from "react-router-dom";

type Input = {
  name: string;
  image: string;
};

export function UserInfo({ name, image }: Input) {
  return (
    <>
      <div className="flex w-80 justify-between content-between">
        <div className="flex flex-col justify-between">
          <div className="flex items-start flex-row gap-2">
            <div className="text-secondary text-white-dimmed">Welcome {name} </div>
            {/* <div className="">👋</div> */}
            <div>
              <img className="h-[15px]" src="public\icons8-waving-hand-emoji-48.png" alt="" />
              </div>
          </div>

          <div className="text-primary text-white">
            Let's relax and watch a movie!
          </div>
        </div>
        <div>
          <img className="w-10 h-10 border rounded-3xl" src={image} />
        </div>
      </div>
    </>
  );
}
