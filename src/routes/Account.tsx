import { Button, ButtonVariant } from "../components/Button";
import { useProtectedRoute } from "../components/TokenValidation";
import { useAuthStore } from "../stores/authStore";

export function Account() {
  const { clearAuth } = useAuthStore();

  useProtectedRoute();

  return (
    <div>
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
