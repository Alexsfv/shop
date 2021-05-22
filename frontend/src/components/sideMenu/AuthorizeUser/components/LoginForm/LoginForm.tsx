import React, { useState } from 'react'
import { useFormik } from 'formik';
import { LoginFormValues } from '../../../../../types/forms';
import { initialLoginForm, valiateLoginForm } from './formData/loginFormData';
import LoginFormInputs from './components/LoginFormInputs/LoginFormInputs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/reducers/rootReducer';
import { UserState } from '../../../../../store/reducers/userReducer';
import { userSagaActions } from '../../../../../store/saga/userSaga';


type LoginFormProps = {
    handleChangeForm: (isLogin: boolean) => void
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { handleChangeForm } = props

    const formState = useSelector<RootState>(state => state.user.loginForm) as UserState['loginForm']
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const dispatch = useDispatch()

    const handleSubmit = (values: LoginFormValues) => {
        dispatch(userSagaActions.login(values))
    }

    const formik = useFormik<LoginFormValues>({
        initialValues: initialLoginForm,
        validate: valiateLoginForm,
        onSubmit: handleSubmit,
    })
    // asdasd@sdd.ty
    return (
        <div className="auth-user__content">
            <p className="auth-user__form-title">
                If you don't have an account you can create one.
            </p>
            <form className="auth-user__body" onSubmit={e => e.preventDefault()}>
                <LoginFormInputs
                    isFetching={formState.isFetching}
                    showPassword={showPassword}
                    values={formik.values}
                    errors={formik.errors}
                    touched={formik.touched}
                    handleChange={formik.handleChange}
                    onSubmit={formik.submitForm}
                    onToggleShowPassword={() => setShowPassword(!showPassword)}
                />
                {
                    formState.success === false &&
                    <p className="auth-user__form-error">
                        Invalid username or password
                    </p>
                }
            </form>
            <div className="auth-user__footer">
                <button
                    className="auth-user__form-btn register btn btn-grey"
                    onClick={() => handleChangeForm(false)}
                >
                    create your account
                </button>
            </div>
        </div>
    )
}

export default LoginForm