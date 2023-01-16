import { Outlet } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const [wrapper, setWrapper] = useState(0);
const longWrapper = () => {
  useEffect(() => {});
};
export function populateSeats() {
  /*    const rewrapper = document.querySelector("#seatcontainer") as HTMLElement;
  console.log(wrapper);
   for (let i = 0; i < 54; i++) {
    const square = document.createElement("div");
    wrapper.appendChild(square);
  } 
  return null;
}  */

  export function SelectSeats() {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(-1);
    };
    populateSeats();
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

        <div className="flex items-center justify-center mt-6">
          <hr className="w-[279px] h-1 bg-yellow" />
        </div>
        <div className="flex items-center justify-center">
          <hr className="w-[279px] h-5 rounded bg-gradient-to-b from-yellow via-white-dimmed to-white-dimmed-heavy opacity-20" />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex-1 max-w-xl mx-auto p-4">
            <div
              className="grid grid-cols-9 grid-rows-6 gap-3 gap-y-3 mt-4 rounded"
              id="seatcontainer"
            >
              Hello
            </div>
          </div>
        </div>

        <Outlet />
      </>
    );
  }
}
