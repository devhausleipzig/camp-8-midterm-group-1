import { Button, ButtonVariant } from "../components/Button";
import { useAuthStore } from "../stores/authStore";

export function Account() {
  const { setToken } = useAuthStore();

  return (
    <div>
      <div className="flex justify-center">
        <Button
          variant={ButtonVariant.secondary}
          label="Log Out"
          onClick={() => setToken("")}
        />
      </div>
    </div>
  );
}
