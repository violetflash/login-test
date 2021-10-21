import React from 'react';
import { FormElement, InputsWrapper, Title } from "./style";
import { Button, Input, Label } from "../ui";

export const LoginForm = ({ title }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };


  return (
    <FormElement onSubmit={submitHandler}>
      <Title>{title}</Title>
      <InputsWrapper>
        <Label label="login">
          <Input/>
        </Label>
        <Label label="password">
          <Input/>
        </Label>
      </InputsWrapper>
      <Button text="login" type="submit" disabled={false}/>
    </FormElement>
  );
};
