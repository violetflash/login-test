import { ButtonContainer } from "../styles";


export const Button = ({ text, onClick = Function.prototype, disabled = false }) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>{text}</ButtonContainer>
  );
};
