import { useState } from "react";
import Authentication from "./MainControllerModules/Authentication";
import MainHub from "./MainControllerModules/MainHub";

function MainController() {
  const [isLoggedIn, setIsloggedIn] = useState(true);

  function logIn() {
    setIsloggedIn(true);
  }

  return <>{isLoggedIn ? <MainHub /> : <Authentication logIn={logIn} />}</>;
}

export default MainController;
