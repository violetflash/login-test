import { ButtonContainer } from "../styles";


export const Button = ({ text, onClick = Function.prototype }) => {
  return (
    <ButtonContainer onClick={onClick}>{text}</ButtonContainer>
  );
};
