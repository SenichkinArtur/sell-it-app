interface Values {
    username?: string;
    email?: string;
    password?: string;
    password1?: string;
    password2?: string;
}

const validate = (values: Values)  => {
    const errors: Values = {};

    if (!values.username) {
        errors.username = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more';
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d).*$/.test(values.password)) {
        errors.password = 'Must contain letters and numbers';
    } else if (!/^(?!.*\s).*$/.test(values.password)) {
        errors.password = 'Cannot contain whitespaces';
    }

    if (!values.password1) {
        errors.password1 = 'Required';
    } else if (values.password1.length < 8) {
        errors.password1 = 'Must be 8 characters or more';
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d).*$/.test(values.password1)) {
        errors.password1 = 'Must contain letters and numbers';
    } else if (!/^(?!.*\s).*$/.test(values.password1)) {
        errors.password1 = 'Cant contain whitespaces';
    }

    if (!values.password2) {
        errors.password2 = 'Required'
    } else if (values.password2 !== values.password1) {
        errors.password2 = 'Passwords must match'
    }
    
    return errors;
}

export default validate;
