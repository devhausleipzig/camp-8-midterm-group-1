import { NavLink } from "react-router-dom";

export function NavigationBar() {
  return (
    <div>
      <nav className="bg-background flex justify-evenly p-2 text-white">
        <NavLink to="/"> Home </NavLink>

        <NavLink to="/movies"> Movies </NavLink>
        <NavLink to="/Bookmark"> Bookmark </NavLink>
        <NavLink to="/Account"> Account </NavLink>
      </nav>
    </div>
  );
}
