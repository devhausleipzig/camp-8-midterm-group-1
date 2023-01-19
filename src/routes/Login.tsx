import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/solid";
import { Navigate } from "react-router-dom";
import { Input } from "../components/Input";
import { useAuthStore } from "./authStore";

export function Login() {
  const { token } = useAuthStore();
  if (!token) return <Navigate to="/home" replace />;
  return (
    <div>
      <h1>Login</h1>
      {/* <Input
        icon={<EnvelopeIcon />}
        type="email"
        placeholder="your@email.com"
      />
      <Input
        icon={<KeyIcon />}
        type="password"
        placeholder="your password here"
      /> */}
    </div>
  );
}
