import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleSelect = ({ target }) => {
    let updatedValue = target.value;

    if (updatedValue === "true" || updatedValue === "false") {
      updatedValue = JSON.parse(updatedValue);
    }
    setValues({
      ...values,
      [target.name]: updatedValue,
    });
  };
  return [values, handleInputChange, handleSelect, reset];
};
