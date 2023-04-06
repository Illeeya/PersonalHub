import { useLogin } from "components/useMainController";
import Authentication from "./MainControllerComponents/Authentication";
import MainHub from "./MainControllerComponents/MainHub";

function MainController() {
  const { isLoggedIn, logIn } = useLogin();

  return <>{isLoggedIn ? <MainHub /> : <Authentication logIn={logIn} />}</>;
}

export default MainController;
