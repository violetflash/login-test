import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 10px 15px;
  border-radius: var(--b-radius);
  background-image: var(--button-bgi);
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  cursor: pointer;
  border: none;
  
  &:hover {
    background-position: right center;
  }
`;
