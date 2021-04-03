import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


type LoginFormProps = {
    handleChangeForm: (isLogin: boolean) => void
}

interface State {
    email: string
    name: string
    password: string
    confirmPassword: string
    showPassword: boolean
    showConfirmPassword: boolean
}

const RegisterForm: React.FC<LoginFormProps> = (props) => {
    const { handleChangeForm } = props

    const [values, setValues] = useState<State>({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,
    })

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    }
    const handleClickShowPassword = (isConfirm: boolean) => {
        if (isConfirm) {
            return setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
        } else {
            setValues({ ...values, showPassword: !values.showPassword })
        }
    }
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    return (
        <div className="auth-user__content">
            <p className="auth-user__form-title">
                if you have an account with us, please log in.
            </p>
            <form className="auth-user__body">
                <TextField
                    value={values.email}
                    label="Email"
                    type="text"
                    variant="outlined"
                    className="auth-user__text-input"
                    onChange={handleChange('email')}
                />

                <TextField
                    value={values.name}
                    label="Name"
                    type="text"
                    variant="outlined"
                    className="auth-user__text-input"
                    onChange={handleChange('name')}
                />

                <FormControl variant="outlined" className="auth-user__text-input">
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        label="Password"
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => handleClickShowPassword(false)}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>

                <FormControl variant="outlined" className="auth-user__text-input">
                    <InputLabel>Confirm password</InputLabel>
                    <OutlinedInput
                        type={values.showConfirmPassword ? 'text' : 'password'}
                        value={values.confirmPassword}
                        label="Confirm password"
                        onChange={handleChange('confirmPassword')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => handleClickShowPassword(true)}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <button className="auth-user__form-btn login btn btn-black">
                    Create account
                </button>
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