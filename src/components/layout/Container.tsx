import styled from "styled-components";

interface IChildrenProps {
  children: React.ReactNode;
}
const ShowContainer = styled.div`
  width: 1024px;
  margin: auto;
  padding: 15px;
`;

const Container: React.FC<IChildrenProps> = ({ children }) => {
  return <ShowContainer>{children}</ShowContainer>;
};

export default Container;
