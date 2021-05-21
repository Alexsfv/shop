import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { CircularProgress, FormHelperText } from '@material-ui/core';
import { FormikSetFieldTouched, RegisterFormValues } from '../../../../../../../types/forms';
import { FormikErrors, FormikTouched } from 'formik';

type RegisterFormInputsProps = {
    showPassword: boolean
    isFetching: boolean
    values: RegisterFormValues
    errors: FormikErrors<RegisterFormValues>
    touched: FormikTouched<RegisterFormValues>
    handleChange: React.ChangeEventHandler
    setFieldTouched: FormikSetFieldTouched<RegisterFormValues>
    onToggleShowPassword: () => void
    submitForm: () => void
}

const RegisterFormInputs: React.FC<RegisterFormInputsProps> = (props) => {
    const {
        values, errors, touched,
        showPassword, isFetching,
        onToggleShowPassword,
        handleChange, setFieldTouched, submitForm,
    } = props

    return (
        <>
            <TextField
                value={values.email}
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                label="Email"
                type="text"
                name="email"
                variant="outlined"
                className="auth-user__text-input"
                onChange={handleChange}
                onFocus={() => setFieldTouched('email')}
            />

            <TextField
                value={values.name}
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                label="Name"
                type="text"
                name="name"
                variant="outlined"
                className="auth-user__text-input"
                onChange={handleChange}
                onFocus={() => setFieldTouched('name')}
            />

            <FormControl
                error={touched.password && !!errors.password}
                variant="outlined"
                className="auth-user__text-input"
            >
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    onFocus={() => setFieldTouched('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={onToggleShowPassword}
                                onMouseDown={(e) => e.preventDefault()}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                />
                {
                    touched.password && errors.password &&
                    <FormHelperText>{errors.password}</FormHelperText>
                }
            </FormControl>

            <FormControl
                error={touched.confirmPassword && !!errors.confirmPassword}
                variant="outlined"
                className="auth-user__text-input"
            >
                <InputLabel>Confirm password</InputLabel>
                <OutlinedInput
                    type={showPassword ? 'text' : 'password'}
                    value={values.confirmPassword}
                    label="Confirm password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onFocus={() => setFieldTouched('confirmPassword')}
                />
                {
                    touched.confirmPassword && errors.confirmPassword &&
                    <FormHelperText>{errors.confirmPassword}</FormHelperText>
                }
            </FormControl>

            <button
                className="auth-user__form-btn login btn btn-black"
                onClick={submitForm}
            >
                Create account
                {
                    isFetching &&
                    <CircularProgress className="auth-user__form-loader" />
                }
            </button>
        </>
    )
}

export default RegisterFormInputs