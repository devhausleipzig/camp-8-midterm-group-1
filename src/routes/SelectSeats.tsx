import { Outlet } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { useNavigate } from "react-router-dom";

export function SelectSeats() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="w-screen h-20 flex items-center justify-between px-6  bg-dark">
        <ChevronLeftIcon
          className="w-3 h-3  text-white"
          onClick={handleClick}
        />

        <h2 className=" text-title text-white ">Select Seats</h2>

        <div></div>
      </div>

      <div className="flex items-center justify-center mt-8">
        <hr className="w-[279px] h-1 bg-yellow" />
      </div>
      <div className="flex items-center justify-center">
        <hr className="w-[279px] h-5 rounded bg-gradient-to-b from-yellow via-white-dimmed to-white-dimmed-heavy opacity-20" />
      </div>
      {/* <div className=" w-screen h-[600px] grid grid-cols-10 grid-rows-6 gap-1"> */}
      <div className="grid grid-cols-10 lg:grid-cols-12 gap-2 mt-4 ">
        <button className=" w-6 h-6 bg-dark"></button>

        <div className="w-6 h-6 bg-white-dimmed"></div>

        <button className="w-6 h-6 bg-white"></button>

        <button className="w-6 h-6 bg-yellow"></button>

        <button className="w-6 h-6 bg-dark"></button>

        <button className="w-6 h-6 bg-yellow"></button>

        <button className="w-6 h-6 bg-yellow"></button>

        <button className="w-6 h-6 bg-yellow"></button>

        <button className="w-6 h-6 bg-yellow"></button>

        <button className="w-6 h-6 bg-yellow"></button>

        <button className="w-6 h-6 bg-yellow"></button>

        <button className="w-6 h-6 bg-yellow"></button>

        <button className="w-6 h-6 bg-yellow"></button>

        <button className="w-6 h-6 bg-yellow"></button>

        <button className="w-6 h-6 bg-yellow"></button>

        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
        <button className="w-6 h-6 bg-yellow"></button>
      </div>

      <Outlet />
    </>
  );
}
