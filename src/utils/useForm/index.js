import {useState} from 'react';

export const useForm = initial => {
  const [values, setValues] = useState(initial);
  return [
    values,
    (formType, formValue) => {
      return setValues({...values, [formType]: formValue});
    },
  ];
};
