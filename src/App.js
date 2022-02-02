// import styled from "styled-components";
import { HipsterButton } from "./components/Buttons";
// import ComplexTitle from "./components/ComplexTitle";
// import AlternativeTitle from "./components/AlternativeTitle";
// import Card from "./components/Card";
// import Loading from "./components/Loading";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <HipsterButton>click me</HipsterButton>
      <HipsterButton as="a" href="https://www.johnsmilga.com/">
        click me
      </HipsterButton>
      <HipsterButton>click me</HipsterButton>
    </div>
  );
}

export default App;
