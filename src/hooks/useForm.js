import { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
  };
}

export function Form(props) {
  const { children, ...other } = props;
  return <form {...other}>{props.children}</form>;
}
