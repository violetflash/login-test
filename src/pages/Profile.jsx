import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login, logout } from '../redux';
import { Button } from "../components/ui";
import { checkIsLoggedIn, deleteUserFromLS, getUserFromLS } from "../utils";

export const Profile = () => {
  const { username } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (checkIsLoggedIn()) {
      dispatch(login({ username: getUserFromLS() }));
    } else if (!checkIsLoggedIn()) {
      history.push("/");
    }

  }, [dispatch, history]);

  const logoutHandler = () => {
    dispatch(logout());
    deleteUserFromLS();
    history.push("/");
  }

  return (
    <>
      <h1>Hello {username}!</h1>
      <Button danger text="logout" onClick={logoutHandler}/>
    </>
  )
};