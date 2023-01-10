import { redirect, useNavigate } from "react-router-dom";

type Input = {
  name: string;
  image: string;
};

export function UserInfo({ name, image }: Input) {
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex flex-col justify-between h-10">
          <div className="flex items-center">
            <p className="text-secondary text-white-dimmed">Welcome {name} </p>
            <p>👋</p>
          </div>

          <p className="text-primary text-white">
            Let's relax and watch a movie!
          </p>
        </div>

        <img className=" w-10 h-10 border rounded-3xl" src={image} />
      </div>
    </>
  );
}
