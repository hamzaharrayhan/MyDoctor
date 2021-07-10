import {useState} from 'react';

export const useForm = initial => {
  const [values, setValues] = useState(initial);
  return [
    values,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setValues(initial);
      }
      return setValues({...values, [formType]: formValue});
    },
  ];
};
