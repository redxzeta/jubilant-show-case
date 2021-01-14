import styled from "styled-components";

interface IChildrenProps {
  children: React.ReactNode;
}

const SideBarContainer = styled.div`
  background-color: lightgray;
  -webkit-flex: 1;
  flex: 1;
`;

const SideBarSection: React.FC<IChildrenProps> = ({ children }) => {
  return <SideBarContainer>{children}</SideBarContainer>;
};
export default SideBarSection;
