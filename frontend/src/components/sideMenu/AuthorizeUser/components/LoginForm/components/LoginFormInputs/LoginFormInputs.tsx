import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { LoginFormValues } from '../../../../../../../types/forms';
import { CircularProgress, FormHelperText } from '@material-ui/core';
import { FormikErrors, FormikTouched } from 'formik';


type LoginFormInputsProps = {
    showPassword: boolean
    values: LoginFormValues
    isFetching: boolean
    errors: FormikErrors<LoginFormValues>
    touched: FormikTouched<LoginFormValues>
    handleChange: React.ChangeEventHandler
    onToggleShowPassword: () => void
    onSubmit: () => void
}

const LoginFormInputs: React.FC<LoginFormInputsProps> = (props) => {

    const {
        values, showPassword, isFetching,
        errors, touched,
        handleChange, onToggleShowPassword,
        onSubmit,
    } = props

    return (
        <>
            <TextField
                value={values.email}
                label="Email"
                type="text"
                variant="outlined"
                className="auth-user__text-input"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                onChange={handleChange}
            />

            <FormControl
                variant="outlined"
                className="auth-user__text-input"
            >
                <InputLabel error={touched.password && !!errors.password}>
                    Password
                </InputLabel>
                <OutlinedInput
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    error={touched.password && !!errors.password}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={onToggleShowPassword}
                                onMouseDown={e => e.preventDefault()}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                />
                {
                    touched.password && !!errors.password &&
                    <FormHelperText id="component-error-text" error={true}>
                        {errors.password}
                    </FormHelperText>
                }
            </FormControl>

            <button className="auth-user__form-btn login btn btn-black" onClick={onSubmit}>
                Login
                {
                    isFetching &&
                    <CircularProgress className="auth-user__form-loader" />
                }
            </button>
        </>
    )
}

export default LoginFormInputs