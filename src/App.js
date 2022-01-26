import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Buttons";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <BasicTitle special>styled component</BasicTitle>
      <BasicTitle>styled component</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton>
    </div>
  );
}

export default App;
