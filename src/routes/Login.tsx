import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, ButtonVariant } from "../components/Button";
import { Input } from "../components/Input";
import { useAuthStore } from "../stores/authStore";
import _ from "lodash";
import { string } from "zod";

export function Login() {
  const { token, setToken } = useAuthStore();

  ////////
  type DataState = {
    usermail: string;
    password: string;
  };

  const [data, setData] = useState<DataState>({
    usermail: "",
    password: "",
  });

  function inputFunction(
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) {
    if (type == "email") {
      setData({
        ...data,
        usermail: event.target.value as string,
      });
    } else {
      setData({
        ...data,
        password: event.target.value as string,
      });
    }
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
            onChange={(event) => inputFunction(event, "email")}
          />
          <Input
            icon={<KeyIcon />}
            placeholder="Enter your Password"
            type="password"
            onChange={(event) => inputFunction(event, "password")}
          />
        </div>
      </div>
      <Button
        variant={ButtonVariant.primary}
        label="Login"
        type="submit"
        onClick={async (event) => {
          event.preventDefault();
          const token = await axios
            .post("http://127.0.0.1:3999/auth/login", {
              username: data.usermail,
              passworf: data.password,
            })
            .then((res) => {
              if (res.status == 200) {
                setToken(res.data);
              } else {
                console.log("Bigg Boo Boo can't remember his password");
              }
            });
        }}
      />
    </form>
  );
}
