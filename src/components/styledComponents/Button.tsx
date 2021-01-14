import styled from "styled-components";

const Button = styled.button`
  padding: 10px 30px;
  color: #fff;
  background: ${(props) => props.theme.colors.main};
  border-radius: 5px;
  display: block;
  margin-bottom: 15px;
  cursor: pointer;
  &:active {
    position: relative;
    top: 1px;
  }
`;

export default Button;
