import { Routes, Route } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar'
//import Header from '../Header/Header'
import { Header } from '../Header/Header'
import './Home.css'
import './Homejquery'

import ApplicationRegistrationFee from '../StudentManagement/DataEntry/NewAdmissions/ApplicationRegistrationFee/ApplicationRegistrationFee'
import BooksFeeofNewStudents from '../StudentManagement/DataEntry/NewAdmissions/BooksFeeofNewStudents/BooksFeeofNewStudents'
import AllotmentOfAdmnNos from '../StudentManagement/DataEntry/NewAdmissions/AllotmentOfAdmnNos/AllotmentOfAdmnNos'
import DefineBusStopsOfNewStudents from '../StudentManagement/DataEntry/NewAdmissions/NewStudentsTransportation/DefineBusStopsOfNewStudents/DefineBusStopsOfNewStudents'

const routes = [
    { path: '/', component: BooksFeeofNewStudents},
    { path: '/ApplicationRegistrationFee', component: ApplicationRegistrationFee },
    { path: '/AllotmentOfAdmnNos', component: AllotmentOfAdmnNos },
    { path: '/DefineBusStopsOfNewStudents', component: DefineBusStopsOfNewStudents}
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
