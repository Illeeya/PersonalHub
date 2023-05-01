import { useState } from "react";
import Authentication from "./MainControllerComponents/Authentication";
import MainHub from "./MainControllerComponents/MainHub";
// MainController.tsx
export function useLogin() {
  const [isLoggedIn, setIsloggedIn] = useState<boolean>(true);

  function logIn() {
    setIsloggedIn(true);
  }

  function MainControllerElement() {
    return <>{isLoggedIn ? <MainHub /> : <Authentication logIn={logIn} />}</>;
  }

  return { MainControllerElement };
}
