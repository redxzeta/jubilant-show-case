import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setUserName } from "../../store/slices/userNameSlice";
import Button from "../styledComponents/Button";
import HeaderTitle from "../styledComponents/HeaderTitle";

const LandingContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 0 25px;
`;

const NameInput = styled.input`
  width: 50%;
  padding: 10px;
  margin-bottom: 15px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
`;
const Landing: React.FC = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const submitUserName = (userName: string) => {
    dispatch(setUserName(userName));
  };

  return (
    <LandingContainer>
      <HeaderTitle>Hi there! Welcome to your education showcase</HeaderTitle>
      <SubTitle>Submit a Name to begin</SubTitle>
      <NameInput
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={() => submitUserName(name)}>Submit</Button>
    </LandingContainer>
  );
};
export default Landing;
