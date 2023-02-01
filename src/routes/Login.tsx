import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, ButtonVariant } from "../components/Button";
import { Input } from "../components/Input";
import { useAuthStore } from "../stores/authStore";
import _ from "lodash";
import { eachWeekOfInterval } from "date-fns/esm";

export function Login() {
  const { token } = useAuthStore();

  ////////

  const [data, setData] = useState({
    usermail: "",
    password: "",
  } as { usermail?: string });

  function Input(event: React.ChangeEvent<HTMLInputElement>, type: string) {
    if ((type = "email")) {
      setData(_.pick(data, ["usermail"]));
    } else {
      setData(_.pick(data, ["password"]));
    }
    console.log(data);
  }

  ////////

  if (token) return <Navigate to="/" replace />;
  return (
    <form className="h-screen flex flex-col justify-between py-8 px-5">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-title">Welcome to Cine-Scape</p>
          <p className="text-body">
            You need to log in to be able to take reservations and add more
            movies to your watchlist
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <Input
            icon={<EnvelopeIcon />}
            type="email"
            placeholder="your@email.com"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              Input(event, "email")
            }
          />
          <Input
            icon={<KeyIcon />}
            placeholder="Enter your Password"
            type="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              Input(event, "password")
            }
          />
        </div>
      </div>
      <Button
        variant={ButtonVariant.primary}
        label="Login"
        type="submit"
        // onClick={Test}
      />
    </form>
  );
}
