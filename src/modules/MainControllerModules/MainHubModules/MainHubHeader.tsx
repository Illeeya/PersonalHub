import "../../../style/mainControllerModules/mainHubModules/mainHubHeaderStyle.css";
interface Props {
  goBack: () => void;
}
export default function MainHubHeader({ goBack }: Props) {
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
