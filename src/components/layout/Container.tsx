import styled from "styled-components";

interface IChildrenProps {
  children: React.ReactNode;
}
const ShowContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: auto;
  padding: 15px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container: React.FC<IChildrenProps> = ({ children }) => {
  return <ShowContainer>{children}</ShowContainer>;
};

export default Container;
