import "../../style/mainControllerModules/authenticationStyle.css";

interface Props {
  logIn: () => void;
}

export default function Authentication({ logIn }: Props) {
  return (
    <div className="authenticationContainer">
      <input type="password" name="pin" id="pin" />
      <button onClick={logIn}>LogIn</button>
    </div>
  );
}
