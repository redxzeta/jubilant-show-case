import { Fragment } from "react";
import { useSelector } from "react-redux";
import Landing from "./components/landing/Landing";

const App: React.FC = () => {
  const userName = useSelector<{ userName: string }>(
    ({ userName }) => userName
  );

  console.log(userName);
  return (
    <Fragment>
      {!userName ? <Landing /> : <h2>{userName} is heres</h2>}{" "}
    </Fragment>
  );
};

export default App;
