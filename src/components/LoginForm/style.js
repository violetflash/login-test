import styled from 'styled-components';

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 15px;
  border-radius: var(--b-radius);
  max-width: 400px;
  background-color: var(--bgColorLight);
  box-shadow: var(--shadow);
`;

export const Title = styled.span`
  margin: 0 0 20px;
  text-align: center;
  font-weight: var(--fw-bold);
  font-size: var(--fs-title);
`;

export const InputsWrapper = styled.div`
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const Fieldset = styled.fieldset`
  margin: 0;
  border: none;
  padding: 0;
`;

