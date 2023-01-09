import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
// import { BsSearch } from "<react-icons />Bs;

export function SearchBar() {
  const navigate = useNavigate();
  const submitfunction = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // const formData = new FormData(form);
    // const fromEntries = formData.entries();
    // const data = Object.fromEntries(formData.entries()) as Record<
    //   string,
    //   string | string[]
    // >;

    navigate("/");

    // const user: Record<string, any> = await axios.post(
    //   "http://0.0.0.0:3000/users",
    //   data
    // );
    // console.log(user.data);

    // alert(`Successfully registered! Your user id is: ${user.data.id}`);
  };

  return (
    <div className="">
      <div className="flex items-center justify-screen gap-5 flex-col justify-center h-screen bg-gray-800">
        <form method="GET">
          <div className="relative focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline text-[#FFFFFF] opacity-40"
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
              className="py-2 text-sm text-[#FFFFFF] rounded-full bg-[#363740] h-[48px] w-[335px] pl-10 focus:outline-none"
              placeholder="Search"
              autoComplete="off"
            ></input>
          </div>
        </form>
        <form method="GET">
          <div className="relative focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline text-[#FFFFFF] opacity-40"
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
              className="py-2 text-sm text-[#FFFFFF] rounded-full bg-[#363740] h-[48px] w-[335px] hover:border-2 hover:border-[#FFFFFF] hover:border-opacity-40 pl-10 focus:outline-none"
              placeholder="Search"
              autoComplete="off"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
