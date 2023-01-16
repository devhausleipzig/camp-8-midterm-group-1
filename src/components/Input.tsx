import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Input() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-end text-title">Welcome to Cine-Scape</div>
      <div className="w-full text-body">
        You need to log in to be able to make revervations and add movies to
        your watchlist
      </div>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            className="px-4 focus:outline-none focus:shadow-outline text-body"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </button>
        </span>
        <input
          type="email"
          name="email-address"
          placeholder="Your@email.com"
          className="rounded-md bg-dark-light text-body h-12 w-full hover:border-2 hover:border-white-dimmed-heavy hover:text-white pl-16"
        />
      </div>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            className="px-4 focus:outline-none focus:shadow-outline text-body"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              />
            </svg>
          </button>
        </span>
        <input
          type="email"
          name="email-address"
          placeholder="Enter your password"
          className="rounded-md bg-dark-light text-body h-12 w-full hover:border-2 hover:border-white-dimmed-heavy  hover:text-white pl-16"
        />
      </div>
    </div>
  );
}
