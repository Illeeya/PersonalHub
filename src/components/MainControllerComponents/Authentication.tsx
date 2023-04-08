import "./authenticationStyle.css";

interface IAuthentication {
  logIn: () => void;
}

export default function Authentication({ logIn }: IAuthentication) {
  return (
    <div className="authenticationContainer">
      <input type="password" name="pin" id="pin" />
      <button onClick={logIn}>LogIn</button>
    </div>
  );
}
