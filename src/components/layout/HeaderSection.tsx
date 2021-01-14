import styled from "styled-components";

interface IChildrenProps {
  children: React.ReactNode;
}
const HeaderContainer = styled.header`
  width: 100%;
  padding: 15px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;
  margin-top: 10px;
`;

const HeaderSection: React.FC<IChildrenProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
export default HeaderSection;
