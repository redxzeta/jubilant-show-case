import styled from "styled-components";

interface IChildrenProps {
  children: React.ReactNode;
}

const SideBarContainer = styled.div`
  background-color: teal;

  width: 200px;
  height: 200px;
`;

const SideBarSection: React.FC<IChildrenProps> = ({ children }) => {
  return <SideBarContainer>{children}</SideBarContainer>;
};
export default SideBarSection;
