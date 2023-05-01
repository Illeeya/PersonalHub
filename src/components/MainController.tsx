import { useLogin } from "./useMainController";

function MainController() {
  const { MainControllerElement } = useLogin();

  return <MainControllerElement />;
}

export default MainController;
