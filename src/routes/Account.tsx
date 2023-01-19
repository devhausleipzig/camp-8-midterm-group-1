import { Navigate, useNavigate } from "react-router-dom";
import { Button, ButtonVariant } from "../components/Button";
import { useAuthStore } from "./authStore";

const navigate = useNavigate;

export function Account() {
  const { token, clearAuth } = useAuthStore();
  if (!token) return <Navigate to="/login" replace />;

  return (
    <div className=" h-full ">
      <h1>Login</h1>
      <h1>Account</h1>
      <div className="flex justify-center">
        <Button
          variant={ButtonVariant.secondary}
          label="Log Out"
          onClick={clearAuth}
        />
      </div>
    </div>
  );
}
