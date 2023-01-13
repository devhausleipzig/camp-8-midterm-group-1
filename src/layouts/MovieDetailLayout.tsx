import { Outlet, useLocation } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { useNavigate } from "react-router-dom";

export function MovieDetailLayout() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  let where: string = "";
  const path = useLocation().pathname.split("/");
  if (path[path.length - 1] == "castcrew") {
    where = "Cast & Crew";
  } else if (path[path.length - 1] == "selecttime") {
    where = "Select Time & Place";
  } else if (path[path.length - 1] == "selectseats") {
    where = "Select Seats";
  } else if (path[path.length - 1] == "ticket") {
    where = "Ticket";
  } else {
    where = "Movie Details";
  }

  return (
    <>
      <div className="w-screen h-20 flex items-center justify-between px-6  bg-dark">
        <ChevronLeftIcon
          className="w-3 h-3  text-white"
          onClick={handleClick}
        />

        <h2 className=" text-title text-white ">{where}</h2>

        <div className="w-3"></div>
      </div>
      <Outlet />
    </>
  );
}
