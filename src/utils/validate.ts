interface Values {
  username?: string;
  email?: string;
  password?: string;
  password1?: string;
  password2?: string;
}
  
const validate = (values: Values) => {
  const errors: Values = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password1) {
    errors.password1 = 'Required';
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/.test(values.password1)) {
    errors.password1 = 'At least 6 characters; 1 lowercase, 1 number, 1 uppercase';
  }

  if (!values.password2) {
    errors.password2 = 'Required';
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/.test(values.password2)) {
    errors.password2 = 'At least 6 characters; 1 lowercase, number, uppercase';
  } else if (values.password2 !== values.password1) {
    errors.password2 = 'Passwords do not match';
  }

  return errors;
};

export default validate;