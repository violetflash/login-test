import { useDispatch, useSelector } from 'react-redux';
import { setInput, clearInputs } from '../../redux';


import { FormElement, InputsWrapper, Title } from "./style";
import { Button, Input, Label } from "../ui";

export const LoginForm = ({ title }) => {
  const login = 'login';
  const password = 'password';
  const dispatch = useDispatch();
  const values = useSelector(state => state.loginForm);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(clearInputs());
  };

  const inputChangeHandle = (e) => {
    dispatch(setInput({ name: [e.target.name], inputValue: e.target.value} ));
  };

  const checkAuthValid = () => {
    return values.login === "developer21" && values.password === "123456";
  };




  return (
    <FormElement onSubmit={submitHandler}>
      <Title>{title}</Title>
      <InputsWrapper>
        <Label label={login}>
          <Input name={login} onChange={inputChangeHandle} value={values[login]}/>
        </Label>
        <Label label={password} >
          <Input name={password} onChange={inputChangeHandle} value={values[password]}/>
        </Label>
      </InputsWrapper>
      <Button text="submit" type="submit" disabled={() => checkAuthValid()}/>
    </FormElement>
  );
};
