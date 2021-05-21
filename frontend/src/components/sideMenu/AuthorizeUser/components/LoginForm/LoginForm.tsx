import React, { useState } from 'react'
import { useFormik } from 'formik';
import { LoginFormValues } from '../../../../../types/forms';
import { initialLoginForm, valiateLoginForm } from './formData/loginFormData';
import LoginFormInputs from './components/LoginFormInputs/LoginFormInputs';


type LoginFormProps = {
    handleChangeForm: (isLogin: boolean) => void
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { handleChangeForm } = props

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleSubmit = (values: LoginFormValues) => {

    }

    const formik = useFormik<LoginFormValues>({
        initialValues: initialLoginForm,
        validate: valiateLoginForm,
        onSubmit: handleSubmit,
    })

    return (
        <div className="auth-user__content">
            <p className="auth-user__form-title">
                If you don't have an account you can create one.
            </p>
            <form className="auth-user__body" onSubmit={e => e.preventDefault()}>
                <LoginFormInputs
                    isFetching={true}
                    showPassword={showPassword}
                    values={formik.values}
                    errors={formik.errors}
                    touched={formik.touched}
                    handleChange={formik.handleChange}
                    onSubmit={formik.submitForm}
                    onToggleShowPassword={() => setShowPassword(!showPassword)}
                />
                {
                    // registerForm.message &&
                    <p className="auth-user__form-error">
                        {/* {registerForm.message} */}
                        some errors
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