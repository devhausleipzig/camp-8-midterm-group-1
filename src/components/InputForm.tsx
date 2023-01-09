import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

export function InputForm() {
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
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        id="form-placeholder"
        className="w-[375px] h-[667px] bg-[#1C1C27] flex flex-col items-center gap- rounded-md"
        onSubmit={submitfunction}
      >
        <div className="flex flex-col">
          <div className="gap-5 flex flex-col text-slate-300 items-center">
            <div>Welcome to Cine-Scape</div>
            <div className="w-[335px] ">
              You need to log in to be able to make revervations and add movies
              to your watchlist
            </div>
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
          </div>
          {/* <input type="text" name="Name" placeholder="Name" /> */}

          {/* 

        <input type="number" name="age" max="100" min="0" />

        <input type="date" name="birthday" /> */}
          {/* <input
          id="checkbox"
          type="checkbox"
          name="Share data"
          checked
          value="true"
        /> */}
          {/* <p>fav fruit</p>
        <fieldset>
          <label htmlFor="fruta1">
            <input type="radio" value="pear" name="fruta" id="fruta" />
            Pear
          </label>

          <label htmlFor="fruta2">
            <input type="radio" value="apple" name="hello" />
            apple
          </label>

          <label htmlFor="fruta3">
            <input type="radio" value="banana" name="hello" /> banana
          </label>
        </fieldset>

        <label htmlFor="city-select">Choose a city</label>
        <select name="city" id="city-select">
          <option value="berlin">berlin</option>
          <option value="Paris">Paris</option>
          <option value="Temuco">Temuco</option>
          <option value="Cairo">Cairo</option>
          <option value="Roma">Roma</option>
        </select> */}
          <div className="">
            <button
              type="submit"
              className="rounded-md h-[48px] w-[335px] bg-[#FFB43A]"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
