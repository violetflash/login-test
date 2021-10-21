import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../redux';
import { LoginForm } from "../components";
import { checkIsLoggedIn, getUserFromLS } from "../utils";

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {

    if (checkIsLoggedIn()) {
      dispatch(login({ username: getUserFromLS() }));
      history.push("/profile");
    }
  }, [history, dispatch]);

  return <LoginForm title="Login Form"/>;
};