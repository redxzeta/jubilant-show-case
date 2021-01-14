import styled from "styled-components";

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 15px;
`;

interface ITitleProps {
  children: React.ReactNode;
}
const HeaderTitle: React.FC<ITitleProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default HeaderTitle;
