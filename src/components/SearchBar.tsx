import { redirect, useNavigate } from "react-router-dom";

export function SearchBar() {
  return (
    <div className="">
      <form method="GET">
        <div className="relative focus-within:text-body">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="px-4 focus:outline-none focus:shadow-outline text-body"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-2 text-body rounded-full bg-dark-light h-12 w-80 hover:border-2 hover:border-white-dimmed-heavy pl-16 focus:outline-none"
            placeholder="Search"
            autoComplete="off"
          ></input>
        </div>
      </form>
    </div>
  );
}
