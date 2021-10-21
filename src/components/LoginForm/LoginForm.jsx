import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setInput, clearInputs, login } from '../../redux';

import { ButtonWrapper, Fieldset, FormElement, InputsWrapper, Title } from "./style";
import { Button, Input, Label, Loader } from "../ui";
import { addUserToLS } from "../../utils";


export const LoginForm = ({ title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const timer = useRef(null);
  const values = useSelector(state => state.loginForm);

  const loginName = 'login';
  const passwordName = 'password';

  const submitHandle = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const username = values[loginName];

    timer.current = setTimeout(() => {
      dispatch(login({ username }));
      addUserToLS(username);
      dispatch(clearInputs());
      history.push("/profile");
    }, 2000);
  };

  const inputChangeHandle = (e) => {
    const name = e.target.name;
    const inputValue = e.target.value;
    dispatch(setInput({ name, inputValue }));
  };

  //в лоб
  const checkAuthValid = () => {
    return values.login === "developer21" && values.password === "123456";
  };

  const disabled = !checkAuthValid();

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  const loader = isLoading ? <Loader/> : null;


  return (
    <FormElement onSubmit={submitHandle}>
      <Title>{title}</Title>
      <Fieldset disabled={isLoading}>
        <InputsWrapper>
          <Label label={loginName}>
            <Input name={loginName} onChange={inputChangeHandle} value={values[loginName]}/>
          </Label>
          <Label label={passwordName} >
            <Input name={passwordName} onChange={inputChangeHandle} value={values[passwordName]}/>
          </Label>
        </InputsWrapper>
        <ButtonWrapper>
          {loader}
          <Button text="submit" type="submit" disabled={disabled}/>
        </ButtonWrapper>
      </Fieldset>
    </FormElement>
  );
};
