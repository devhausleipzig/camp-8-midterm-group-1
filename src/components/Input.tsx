import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";

export function Input() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            className="px-4 focus:outline-none focus:shadow-outline text-body"
          >
            <EnvelopeIcon className="h-6 w-6" />
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
            <KeyIcon className="h-6 w-6" />
          </button>
        </span>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="rounded-md bg-dark-light text-body h-12 w-full hover:border-2 hover:border-white-dimmed-heavy  hover:text-white pl-16"
        />
      </div>
    </div>
  );
}
