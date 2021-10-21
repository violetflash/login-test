import styled from 'styled-components';

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 15px;
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

