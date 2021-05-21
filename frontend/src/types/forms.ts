import { FormikErrors } from "formik";

export type LoginFormValues = {
    email: string
    password: string
}

export type RegisterFormValues = {
    email: string
    name: string
    password: string
    confirmPassword: string
}

export type FormikSetFieldTouched<Values> = (field: string, touched?: boolean, shouldValidate?: boolean | undefined) => Promise<FormikErrors<Values>> | Promise<void>;