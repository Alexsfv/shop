import { LoginFormValues } from "../../../../../../types/forms"

type LoginFormErrors = {
    email?: string
    password?: string
}

export const valiateLoginForm = (values: LoginFormValues) => {
    const errors = {} as LoginFormErrors

    if (!values.email) errors.email = 'Enter email'
    if (!values.password) errors.password = 'Enter password'

    return errors
}

export const initialLoginForm = {
    email: '',
    password: '',
}

export const clearLoginFormErrors = {
    email: '',
    password: '',
}