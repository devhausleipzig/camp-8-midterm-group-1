import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Input() {
  const navigate = useNavigate();
  const submitfunction = async (event) => {
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
    <div className="w-screen h-screen flex justify-center">
      <form
        id="form-placeholder"
        className="w-[375px] h-[667px] bg-[#1C1C27] flex flex-col gap-5 rounded-md"
        onSubmit={submitfunction}
      >
        <div className="flex flex-col">
          <div className="gap-5 text-slate-300 justify-center grid grid-rows-[1fr_1fr_1fr_8fr_1fr]">
            <div className="flex items-end">Welcome to Cine-Scape</div>
            <div className="w-[335px]">
              You need to log in to be able to make revervations and add movies
              to your watchlist
            </div>
            {/* put here the button/login components created by Regina */}
            <div>
              <input
                type="email"
                name="email-address"
                placeholder="Your@email.com"
                className="rounded-md bg-[#363740] h-[48px] w-[335px]"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="rounded-md bg-[#363740] h-[48px] w-[335px]"
              />
            </div>
            <div className="flex items-end">
              {/* Dummy button. Use the ones by Regina */}
              <Button></Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
