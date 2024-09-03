import { Routes, Route } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar'
//import Header from '../Header/Header'
import { Header } from '../Header/Header'
import './Home.css'
import './Homejquery'

import ApplicationRegistrationFee from '../StudentManagement/DataEntry/NewAdmissions/ApplicationRegistrationFee/ApplicationRegistrationFee'
import BooksFeeofNewStudent from '../StudentManagement/DataEntry/NewAdmissions/BooksFeeofNewStudent/BooksFeeofNewStudent'

const routes = [
    { path: '/', component: ApplicationRegistrationFee },
    { path: '/a', component: BooksFeeofNewStudent}  
];

export const Home = () => {

    return (
        <div className='home-bg-container' refresh="true">
            <SideBar />
            <div className='header-content-bg-container'>
                <Header />
                <div className='each-content-container'>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route exact path={route.path} key={index} element={<route.component />} />
                        ))}
                    </Routes>
                </div>
            </div>
        </div>
    )
}
