import { Fragment } from "react";

import Landing from "./components/landing/Landing";

// import Container from "./components/layout/Container";
// const Button = styled.button`
//   background: palevioletred;
//   border-radius: 3px;
//   border: none;
//   color: white;
// `;

const App: React.FC = () => {
  return (
    <Fragment>
      <Landing />
    </Fragment>
  );
};

export default App;
