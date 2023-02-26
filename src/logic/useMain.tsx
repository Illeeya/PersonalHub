import { useState } from "react";
// MainController.tsx
export function useLogin() {
  const [isLoggedIn, setIsloggedIn] = useState<boolean>(true);
  function logIn() {
    setIsloggedIn(true);
  }
  return { isLoggedIn, logIn };
}
