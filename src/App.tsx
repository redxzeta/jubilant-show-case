import { Fragment } from "react";
import { useSelector } from "react-redux";
import Education from "./components/education/Education";
import Landing from "./components/landing/Landing";

const App: React.FC = () => {
  const userName = useSelector<{ userName: string }>(
    ({ userName }) => userName
  );

  return <Fragment>{!userName ? <Landing /> : <Education />} </Fragment>;
};

export default App;
