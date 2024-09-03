import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'

export const Login = () => {

    const [userMobile, setUserMobile] = useState("")
    const [UserPassword, setUserPassword] = useState("")

    const [getPasswordToggle, setPasswordToggle] = useState(true);

    const navigate = useNavigate();

    const getUserData = (event) => {
        event.preventDefault();
        const userDetails = { userMobile, UserPassword };
        navigate('/Home');
        setUserMobile("")
        setUserPassword("")
    }

    const togglePassword = () => {
        setPasswordToggle(!getPasswordToggle)
    }

    return (
        <div className="Login-bg-container">
            <form className='form-bg-container' onSubmit={getUserData}>
                <p className='login-to-Ac-para mb-4'>LOGIN TO YOUR ACCOUNT</p>
                <div className="input-container mb-3">
                    <input type="text" className='each-input-filed' maxLength="10" placeholder="Mobile No" required onChange={(event) => setUserMobile(event.target.value)} value={userMobile} />
                    <FontAwesomeIcon icon={faUser} className='eachIcon' />
                </div>
                <div className="input-container mb-4">
                    <input type={getPasswordToggle ? "password" : "text"} placeholder='Password' className='each-input-filed' required onChange={(event) => setUserPassword(event.target.value)} value={UserPassword} />
                    {getPasswordToggle ? <FontAwesomeIcon icon={faEye} className='eachIcon' onClick={togglePassword} /> : <FontAwesomeIcon icon={faEyeSlash} className='eachIcon' onClick={togglePassword} />}
                </div>
                <div className="forgot-login-container mb-3">
                    <label className='forgot-password-label'>Forgot Password?</label>
                    <button className='login-button' type="submit">LOGIN</button>
                </div>
                <div style={{ width: '100%', height: '15px', borderBottom: '1px solid white', textAlign: 'center' }} className='mb-5'>
                    <span style={{ fontSize: '12px', backgroundColor: '#F3F5F6', padding: '5px 10px 5px 10px' }}>OR</span>
                </div>
                <div className="text-center">
                    <button className='create-an-account-button' type='button'>CREATE AN ACCOUNT</button>
                </div>
            </form>
        </div>
    )
}
