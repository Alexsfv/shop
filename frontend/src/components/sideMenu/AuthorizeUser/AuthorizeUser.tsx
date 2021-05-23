import React, { useState } from 'react'
import TabPanel from '../../ui/TabPanel/TabPanel'
import './AuthorizeUser.scss'
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';

type AuthorizeUserProps = {
    value: number
    index: number
}

const AuthorizeUser: React.FC<AuthorizeUserProps> = (props) => {
    const { value, index } = props

    const [isLogin, setLogin] = useState<boolean>(true)

    const handleChangeForm = (isLogin: boolean) => {
        setLogin(isLogin)
    }

    return (
        <div className="auth-user">
            <TabPanel value={value} index={index}>
                { isLogin
                    ? <LoginForm handleChangeForm={handleChangeForm}/>
                    : <RegisterForm handleChangeForm={handleChangeForm}/>
                }
            </TabPanel>
        </div>
    )
}

export default AuthorizeUser