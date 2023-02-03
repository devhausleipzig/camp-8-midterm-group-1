import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
import dotenv from "dotenv";
import { useAuthStore } from "../stores/authStore";

export function useProtectedRoute() {
  const auth = useAuthStore();
  const navigate = useNavigate();

  // const secretKey = process.env.SECRET_KEY as string;

  if (!auth.token) {
    navigate("login");
  } else {
    return;
  }
}
