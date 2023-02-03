import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, ButtonVariant } from "../components/Button";
import { Input } from "../components/Input";
import { useAuthStore } from "../stores/authStore";
import _ from "lodash";

export function Login() {
  const [password, setPassword] = useState("");
  const [emailInput, setEmailInput] = useState<string>("");
  const { token, setToken, infos, setInfos } = useAuthStore();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function onSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log(infos.email);
    if (emailInput === infos.email && password === infos.password) {
      setToken("token-token");
      setEmailInput(emailInput);
      navigate("/");
    }
    setError("Incorrect, try again");
  }
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
            onChange={(event) => setEmailInput(event.target.value)}
          />
          <Input
            icon={<KeyIcon />}
            placeholder="Enter your Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
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
