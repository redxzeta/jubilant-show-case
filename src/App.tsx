import { Fragment } from "react";
import styled from "styled-components";
import Landing from "./components/landing/Landing";
// import Container from "./components/layout/Container";
const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;

const App: React.FC = () => {
  return (
    <Fragment>
      TEST
      <Landing />
      <Button>I'm purple.</Button>
      <h1>TEST</h1>
    </Fragment>
  );
};

export default App;
