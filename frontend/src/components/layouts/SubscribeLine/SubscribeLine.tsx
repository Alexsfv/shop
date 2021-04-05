import React, { useState } from 'react'
import './SubscribeLine.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


type SubscribeLineProps = {

}

const SubscribeLine: React.FC<SubscribeLineProps> = (props) => {

    const [email, setEmail] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Email: ', email)
        setEmail('')
    }

    return (
        <div className="subscribe">
            <div className="container">
                <div className="subscribe__body">

                    <p className="subscribe__text">be in touch with us</p>

                    <form className="subscribe__form" onSubmit={submitHandler}>
                        <input
                            type="email"
                            value={email}
                            className="subscribe__form-input"
                            placeholder="Enter your email"
                            onChange={changeHandler}
                        />
                        <input type="submit" value="join us" className="subscribe__form-submit" />
                    </form>

                    <ul className="subscribe__socials">
                        <li className="subscribe__social-link">
                            <FacebookIcon className="subscribe__social-icon" />
                        </li>
                        <li className="subscribe__social-link">
                            <TwitterIcon className="subscribe__social-icon" />
                        </li>
                        <li className="subscribe__social-link">
                            <InstagramIcon className="subscribe__social-icon" />
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default SubscribeLine