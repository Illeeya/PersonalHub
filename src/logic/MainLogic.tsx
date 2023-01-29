import { useState } from "react";
// MainController.tsx
export function useLogin() {
  const [isLoggedIn, setIsloggedIn] = useState(true);
  function logIn() {
    setIsloggedIn(true);
  }
  return { isLoggedIn, logIn };
}
