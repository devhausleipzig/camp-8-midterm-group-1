import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonVariant } from "../components/Button";
import { Hash } from "../components/HashPassword";
import { Input } from "../components/Input";
import { useAuthStore } from "./authStore"; 


export function Login() {
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setEmail, setToken } = useAuthStore();
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function onSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log("Sumbmit Button Pressed");
    const salt = Hash.salt();
    const hashedPassword = Hash.hashSync(password, salt);

    if (emailInput === "dan@devhausleipzig.de" && password === "test123") {
      setToken("test-token");
      setEmail(emailInput);
      navigate("/");
    }
    setError("Incorrect Credentials");
  }
  }

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
            onChange={(event) => useAuthStore.setState.  (event.target.value)}
          />
          <Input
            icon={<KeyIcon />}
            placeholder="Enter your Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      <Button
        variant={ButtonVariant.primary}
        label="Login"
        type="submit"
        onClick={onSubmit}
      />
    </form>
  );
}
