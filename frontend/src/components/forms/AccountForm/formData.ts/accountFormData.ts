import { AccountFormValues } from '../../../../types/forms'

export const validateAccountForm = () => {
    return {}
}

export const initialAccountForm: AccountFormValues = {
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    imageSrc: '',

    _img: null,
}

export const clearAccountFormErrors = {
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    imageSrc: '',

    _img: '',
}