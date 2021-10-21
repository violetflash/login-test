import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from "../components/ui";

export const NotFound = () => {
  const history = useHistory();
  const returnHandler = () => history.push("/");

  return (
    <>
      <h1>This page doesn't exist!</h1>
      <Button text="Back" onClick={returnHandler}/>
    </>
  )
};