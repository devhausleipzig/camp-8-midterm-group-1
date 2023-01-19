import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/solid";
import { Button, ButtonVariant } from "../components/Button";
import { Input } from "../components/Input";

export function Login() {
  return (
    <div className="h-screen flex flex-col justify-between py-8 px-5">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-title">Welcome to Cine-Scape</p>
          <p className="text-body">
            You need to log in to be able to take reservations and add more
            movies to your watchlist
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <Input icon={<EnvelopeIcon />} />
          <Input icon={<KeyIcon />} />
        </div>
      </div>
      <Button variant={ButtonVariant.primary} label="Login" />
    </div>
  );
}
