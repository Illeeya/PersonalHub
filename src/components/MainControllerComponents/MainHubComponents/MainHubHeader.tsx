import "./mainHubHeaderStyle.css";
export default function MainHubHeader({ goBack }: { goBack: () => void }) {
  return (
    <>
      <div className="mainHubHeaderContainer">
        <button onClick={goBack}>{"<"}</button>
        <h1>Welcome to the hub!</h1>
        <hr />
      </div>
    </>
  );
}
