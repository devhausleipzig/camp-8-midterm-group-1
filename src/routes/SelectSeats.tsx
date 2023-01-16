import { Outlet } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SeatSquares } from "../components/SeatSquares";

export function SelectSeats() {
  useEffect(() => {
    const wrapper = document.querySelector("#seatcontainer") as HTMLElement;
    //console.log(wrapper);
    for (let i = 0; i < 54; i++) {
      const square = document.createElement("div");
      wrapper.appendChild(square);
    }
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="w-screen h-20 flex items-center justify-between px-6  bg-dark">
        <ChevronLeftIcon className="w-3 h-3 text-white" onClick={handleClick} />

        <h2 className=" text-title text-white ">Select Seats</h2>

        <div></div>
      </div>

      <div className="flex items-center justify-center mt-6">
        <hr className="w-[279px] h-1 bg-yellow" />
      </div>
      <div className="flex items-center justify-center">
        <hr className="w-[279px] h-5 rounded bg-gradient-to-b from-yellow via-white-dimmed to-white-dimmed-heavy opacity-20" />
      </div>
      <div className="flex items-center justify-center mt-8 mx-5 my-5">
        <div
          className="grid grid-cols-9 grid-rows-6 gap-3 gap-y-3 mt-4 rounded"
          id="seatcontainer"
        >
          {/* First Row */}
          <div className=" bg-dark"></div>
          <SeatSquares square="Available" />
          <SeatSquares square="Selected" />
          <SeatSquares square="Reserved" />
          <div className=" bg-dark"></div>
          <SeatSquares square="Available" />
          <SeatSquares square="Available" />
          <SeatSquares square="Available" />
          <div className=" bg-dark"></div>
          {/* Second Row */}

          <SeatSquares square="Available" />
          <SeatSquares square="Available" />
          <SeatSquares square="Available" />
          <SeatSquares square="Available" />
          <div className=" bg-dark"></div>
          <SeatSquares square="Available" />
          <SeatSquares square="Available" />
          <SeatSquares square="Reserved" />
          <SeatSquares square="Available" />
          {/* Third Row */}
          <SeatSquares square="Available" />
          <SeatSquares square="Reserved" />
          <SeatSquares square="Reserved" />
          <SeatSquares square="Available" />
          <div className=" bg-dark"></div>
          <SeatSquares square="Available" />
          <SeatSquares square="Selected" />
          <SeatSquares square="Selected" />
          <SeatSquares square="Available" />
          {/* Fourth Row */}

          <SeatSquares square="Available" />
          <SeatSquares square="Available" />
          <SeatSquares square="Available" />
          <SeatSquares square="Available" />
          <div className=" bg-dark"></div>
          <SeatSquares square="Available" />
          <SeatSquares square="Available" />
          <SeatSquares square="Reserved" />
          <SeatSquares square="Available" />

          {/* Fifth Row */}
          <SeatSquares square="Available" />
          <SeatSquares square="Reserved" />
          <SeatSquares square="Reserved" />
          <SeatSquares square="Available" />
          <div className=" bg-dark"></div>
          <SeatSquares square="Available" />
          <SeatSquares square="Reserved" />
          <SeatSquares square="Reserved" />
          <SeatSquares square="Reserved" />
          {/* Sixth Row */}
          <div className=" bg-dark"></div>
          <SeatSquares square="Available" />
          <SeatSquares square="Available" />
          <SeatSquares square="Available" />
          <div className=" bg-dark"></div>
          <SeatSquares square="Reserved" />
          <SeatSquares square="Selected" />
          <SeatSquares square="Selected" />
          <div className=" bg-dark"></div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
