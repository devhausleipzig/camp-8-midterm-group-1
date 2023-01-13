import { Outlet, useLocation } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { useNavigate } from "react-router-dom";

export function MovieDetailLayout() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  console.log(useLocation().pathname.split("/"));

  return (
    <>
      <div className="w-screen h-20 flex items-center justify-between px-6  bg-dark">
        <ChevronLeftIcon
          className="w-3 h-3  text-white"
          onClick={handleClick}
        />

        <h2 className=" text-title text-white ">Movie Detail</h2>

        <div className="w-3"></div>
      </div>
      <Outlet />
    </>
  );
}
