import { signIn as signInAuth } from "@/auth";

export async function signIn() {
  return signInAuth();
}
