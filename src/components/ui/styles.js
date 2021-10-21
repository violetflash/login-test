import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 10px 15px;
  border-radius: var(--b-radius);
  font-size: var(--fz);
  font-family: var(--family);
  background-image: var(--button-bgi);
  text-transform: uppercase;
  transition: background-position 0.3s ease;
  background-size: 200% auto;
  cursor: pointer;
  border: none;
  
  &:hover {
    background-position: right center;
  }
`;

export const InputElement = styled.input`
  padding: 10px 15px;
  border-radius: var(--b-radius);
  font-size: var(--fz);
  font-family: var(--family);
`;
