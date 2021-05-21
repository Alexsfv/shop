import { RegisterFormValues } from "../../../../../../types/forms";

type FormErrors = {
    email?: string
    name?: string
    password?: string
    confirmPassword?: string
}

export const validateRegisterForm = (values: RegisterFormValues) => {
    const errors: FormErrors = {};

    if (!values.email) {
        errors.email = 'Email is required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.name) {
        errors.name = 'Name is required!'
    } else if (values.name.length < 2) {
        errors.name = 'Min 2 characters'
    }

    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 2) {
        errors.password = 'Min 2 characters'
    }
    if (!values.confirmPassword) errors.confirmPassword = 'Confirm password!'

    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords must match'
    }

    return errors;
}

export const initialRegisterForm = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
}

export const clearRegisterFormErrors = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
}