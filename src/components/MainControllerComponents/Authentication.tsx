import "./authenticationStyle.css";

export default function Authentication({ logIn }: { logIn: () => void }) {
  return (
    <div className="authenticationContainer">
      <input type="password" name="pin" id="pin" />
      <button onClick={logIn}>LogIn</button>
    </div>
  );
}
