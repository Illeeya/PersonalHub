import { useLogin } from "logic/MainLogic";
import Authentication from "./MainControllerModules/Authentication";
import MainHub from "./MainControllerModules/MainHub";

function MainController() {
  const { isLoggedIn, logIn } = useLogin();

  return <>{isLoggedIn ? <MainHub /> : <Authentication logIn={logIn} />}</>;
}

export default MainController;
