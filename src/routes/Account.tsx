import { Button, ButtonVariant } from "../components/Button";
import { useAuthStore } from "./authStore";

export function Account() {
  const { clearAuth } = useAuthStore();

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
