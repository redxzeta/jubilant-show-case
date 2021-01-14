import styled from "styled-components";

interface IChildrenProps {
  children: React.ReactNode;
}

const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  min-height: 100%;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.lightgray};
`;

const ContentSection: React.FC<IChildrenProps> = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};
export default ContentSection;
