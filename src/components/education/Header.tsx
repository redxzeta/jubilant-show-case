import { useSelector } from "react-redux";
import HeaderSection from "../layout/HeaderSection";
import Button from "../styledComponents/Button";
import HeaderTitle from "../styledComponents/HeaderTitle";

const Header: React.FC = () => {
  const userName = useSelector<{ userName: string }>(
    ({ userName }) => userName
  );

  return (
    <HeaderSection>
      <HeaderTitle>Welcome to {userName}'s Education Page</HeaderTitle>
      <Button>Add Education</Button>
    </HeaderSection>
  );
};
export default Header;
