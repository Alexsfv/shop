import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { RegisterFormValues } from '../../../../../types/forms';
import { useDispatch, useSelector } from 'react-redux';
import { userSagaActions } from '../../../../../store/saga/userSaga';
import { clearRegisterFormErrors, initialRegisterForm, validateRegisterForm } from './formData/registerFormData';
import RegisterFormInputs from './components/RegisterFormInputs/RegisterFormInputs';
import { RootState } from '../../../../../store/reducers/rootReducer';
import { UserState } from '../../../../../store/reducers/userReducer';
import { userActions } from '../../../../../store/actions/userActions';


type LoginFormProps = {
    handleChangeForm: (isLogin: boolean) => void
}

const RegisterForm: React.FC<LoginFormProps> = (props) => {
    const { handleChangeForm } = props

    const registerForm = useSelector<RootState>(state => state.user.registerForm) as UserState['registerForm']
    const [showPassword, setShowPassword] = useState(false)

    const dispatch = useDispatch()

    const onSubmit = (values: RegisterFormValues) => {
        dispatch(userSagaActions.register(values))
    }

    const formik = useFormik<RegisterFormValues>({
        initialValues: initialRegisterForm,
        validateOnChange: false,
        validateOnBlur: false,
        validate: validateRegisterForm,
        onSubmit,
    })

    useEffect(() => {
        if (!registerForm.success) return
        formik.setValues(initialRegisterForm)
        formik.setErrors(clearRegisterFormErrors)
        setTimeout(() => {
            dispatch(userActions.setRegisterStatus({
                isFetching: false,
                success: null
            }))
        }, 2500)
    }, [registerForm.success])

    return (
        <div className="auth-user__content">
            <p className="auth-user__form-title">
                if you have an account with us, please log in.
            </p>
            <form className="auth-user__body" onSubmit={e => e.preventDefault()}>
                <RegisterFormInputs
                    values={formik.values}
                    errors={formik.errors}
                    touched={formik.touched}
                    showPassword={showPassword}
                    isFetching={registerForm.isFetching}
                    handleChange={formik.handleChange}
                    setFieldTouched={formik.setFieldTouched}
                    submitForm={formik.submitForm}
                    onToggleShowPassword={() => setShowPassword(!showPassword)}
                />
                {
                    registerForm.success &&
                    <p className="auth-user__form-success">
                        User created successfully
                    </p>
                }
                {
                    registerForm.success === false &&
                    <p className="auth-user__form-error">
                        This email is already registered
                    </p>
                }
            </form>
            <div className="auth-user__footer">
                <button
                    className="auth-user__form-btn register btn btn-grey"
                    onClick={() => handleChangeForm(true)}
                >
                    i have an account
                </button>
            </div>
        </div>
    )
}

export default RegisterForm