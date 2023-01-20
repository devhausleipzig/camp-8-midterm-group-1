import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonVariant } from "../components/Button";
import { Hash } from "../components/HashPassword";
import { Input } from "../components/Input";
import { useAuthStore } from "./authStore";

export function Login() {
  const [password, setPassword] = useState("");
  const [emailInput, setEmailInput] = useState<string>("");
  const { infos, setInfos } = useAuthStore();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function onSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log("Sumbmit Button Pressed");
    const salt = infos.salt;
    const hashedPassword = Hash.hashSync(password, salt);
    console.log(hashedPassword);
    console.log(infos.email);
    console.log(infos.hash);
    console.log(hashedPassword === infos.hash);

    if (emailInput === infos.email && hashedPassword === infos.hash) {
      setInfos({
        email: emailInput,
        hash: hashedPassword,
        salt: salt,
        avatar: "",
      });
      navigate("/");
    }
    setError("Incorrect Credentials");
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
            onChange={(event) => setEmailInput(event.target.value)}
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
