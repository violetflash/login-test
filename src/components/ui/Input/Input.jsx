import { InputElement } from "../styles";

export const Input = ({
  value,
  name = null,
  placeholder = null,
  type = 'text',
  onChange = Function.prototype,
  onBlur = Function.prototype }) => {
  return (
    <InputElement
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
