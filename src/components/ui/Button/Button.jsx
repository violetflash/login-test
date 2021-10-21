import { ButtonContainer } from "../styles";


export const Button = ({ text, type = 'button', onClick = Function.prototype, disabled = false }) => {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonContainer>
  );
};
