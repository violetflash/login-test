import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 10px 15px;
  border-radius: var(--b-radius);
  font-size: var(--fz);
  font-family: var(--family);
  font-weight: var(--fw-bold);
  background-image: ${props => props.disabled === false && 'var(--button-bgi)' };
  background-color: ${props => props.disabled === true && 'var(--grey)' };
  text-transform: uppercase;
  transition: background-position 0.3s ease, transform 0.3s ease;
  background-size: 200% auto;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 0 #c4c4c4;
  
  &:hover {
    background-position: right center;
  }
  
  &:active {
    position: relative;
    top: 2px;
    box-shadow: none;
  }
  
  &:disabled {
    &:hover {
      background-position: unset;
    }

    &:active {
      position: relative;
      top: 0;
      box-shadow: 0 2px 0 #c4c4c4;
    }
  }
`;

export const InputElement = styled.input`
  padding: 10px 15px;
  border-radius: var(--b-radius);
  font-size: var(--fz);
  font-family: var(--family);
  border: 1px solid var(--inputBgColor);
  background-color: var(--bgColorDark);
`;

export const LabelElement = styled.label`
  display: block;
  margin: 0 0 10px;
  width: 100%;
`;

export const LabelText = styled.span`
  display: block;
  margin: 0 0 5px 10px;
  
`;
