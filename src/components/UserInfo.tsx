import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
// import { BsSearch } from "<react-icons />Bs;

export function UserInfo() {
  return (
    <>
      <h1 className="text-white font-semibold text-2xl mb-4 ">Home</h1>
      <div className="flex flex-row gap-28">
        <div className="flex flex-col justify-between h-10">
          <h4 className="font-bold text-xs text-white">Welcome Dan 👋</h4>
          <p className="text-sm font-bold text-white ">
            Let's relax and watch a movie!
          </p>
        </div>
        <div className="flex items-end">
          <img
            className=" w-10 h-10 border rounded-3xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXYtMEG6cd8TnTCLq4L8qvasNk_a7snIVaKQ&usqp=CAU"
            alt="happyface"
          />
        </div>
      </div>
    </>
  );
}
