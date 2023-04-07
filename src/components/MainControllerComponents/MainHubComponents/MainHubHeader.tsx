import "./mainHubHeaderStyle.css";
interface IMainHubHeader {
  goBack: () => void;
}
export default function MainHubHeader({ goBack }: IMainHubHeader) {
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
