import "style/mainControllerModules/authenticationStyle.css";

interface Iauthentication {
  logIn: () => void;
}

export default function Authentication({ logIn }: Iauthentication) {
  return (
    <div className="authenticationContainer">
      <input type="password" name="pin" id="pin" />
      <button onClick={logIn}>LogIn</button>
    </div>
  );
}
