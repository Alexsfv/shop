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

export type AccountFormValues = {
    name: string
    email: string
    phone: string
    imageSrc: string
    country: string
    city: string

    _img: File | null
}

export type FormikSetFieldTouched<Values> = (field: string, touched?: boolean, shouldValidate?: boolean | undefined) => Promise<FormikErrors<Values>> | Promise<void>;