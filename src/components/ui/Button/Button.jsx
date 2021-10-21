import { ButtonContainer } from "../styles";


export const Button = ({ text, danger = null, type = 'button', onClick = Function.prototype, disabled = false }) => {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      disabled={disabled}
      danger={danger}
    >
      {text}
    </ButtonContainer>
  );
};
