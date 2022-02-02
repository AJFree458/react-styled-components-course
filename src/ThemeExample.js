import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
// import ComplexTitle from "./components/ComplexTitle";
// import AlternativeTitle from "./components/AlternativeTitle";
// import Card from "./components/Card";
import GlobalStyles from "./global-style";

const BaseTheme = {
  color: "#222",
  background: "#fff",
};
const DarkTheme = {
  color: "#fff",
  background: "#222",
};

const Container = styled.div`
  padding: 2rem;
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
`;

function App() {
  const [baseTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!baseTheme);
  };
  return (
    <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        <h1>hello world</h1>
        <button className="btn" onClick={toggleTheme}>
          toggle me
        </button>
      </Container>
      {/* <ComplexTitle title={"more complex title"} />
      <AlternativeTitle title={"alternative title"} /> */}
      {/* <Card /> */}
    </ThemeProvider>
  );
}

export default App;
