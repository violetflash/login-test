import React from 'react';
import { LabelElement, LabelText } from "../styles";

export const Label = ({children, label}) => {
  return (
    <LabelElement>
      <LabelText>{label}:</LabelText>
      {children}
    </LabelElement>
  );
};
