import { NavLink, Outlet } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { useNavigate } from "react-router-dom";

export function MovieDetailLayout() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <nav className="w-[375px] h-[667px] bg-dark rounded-[1.5rem] flex">
        <ChevronLeftIcon className="w-6 h-6" onClick={handleClick} />
        <h3 className=" text-title text-white items-center justify-center pt-[2rem] px-[8.6rem]">
          Movie Detail
        </h3>
      </nav>
      <h1>Movies</h1>
      <Outlet />
    </div>
  );
}
