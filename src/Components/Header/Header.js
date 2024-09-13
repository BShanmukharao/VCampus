import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { toggleValue } from '../Redux/ToggleSideBarSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPowerOff, faCircleArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';

import './Headerjquery'
import './Header.css'

export const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        navigate("/");
    }

    return (
        <div className='header-bg-container'>
            <div>
                <a data-toggle="tooltip" data-placement="top" title="Toggle sidebar" id='Header-Above-Arrow-Id' onClick={() => dispatch(toggleValue())}><FontAwesomeIcon icon={faCircleArrowLeft} className={`hamburger-menu ${'above-mobile'}`} id="header-above-arrow-icon" /></a>
                <a data-toggle="tooltip" data-placement="top" title="Toggle sidebar" id='Header-Below-Arrow-Id' onClick={() => dispatch(toggleValue())}><FontAwesomeIcon icon={faBars} className={`hamburger-menu ${'below-mobile'}`} id="header-below-arrow-icon" /></a>
            </div>
            <div className='bell-icon-with-logout'>
                <a data-toggle="tooltip" data-placement="top" title="See notifications">
                    <FontAwesomeIcon icon={faBell} className="bell-icon" />
                </a>
                <div className='power-icon-with-span' data-toggle="tooltip" data-placement="top" title="Logout" onClick={logout}>
                    <FontAwesomeIcon icon={faPowerOff} className='power-icon' /><span className='logout-span'>Logout</span>
                </div>
            </div>
        </div>
    )
}
