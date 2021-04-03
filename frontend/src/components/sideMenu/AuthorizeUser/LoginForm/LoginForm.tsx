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
    email: string;
    password: string;
    showPassword: boolean
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { handleChangeForm } = props

    const [values, setValues] = useState<State>({
        email: '',
        password: '',
        showPassword: false,
    })

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    }
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    }
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    return (
        <div className="auth-user__content">
            <p className="auth-user__form-title">
                If you don't have an account you can create one.
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

                <FormControl variant="outlined" className="auth-user__text-input">
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
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

                <button className="auth-user__form-btn login btn btn-black">
                    Login
                            </button>
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