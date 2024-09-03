import { Routes, Route } from 'react-router-dom';
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import './Content.css'

import ApplicationsRegistrationFee from '../StudentManagement/DataEntry/NewAdmission/ApplicationsRegistrationFee/ApplicationsRegistrationFee'
import NewStudentMonthlyTerm from '../StudentManagement/DataEntry/NewAdmission/NewStudentMonthlyTermFee/NewStudentMonthlyTerm'

const routes = [
    { path: 'a', component: ApplicationsRegistrationFee },
    { path: 'b', component: NewStudentMonthlyTerm },
    
];


function Content() {
    return (
        <div className='counter-bg-container'>
            <SideBar />
            <div className='header-content-bg-container'>
                <Header />
                <div className='each-content-container'>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route exact path={route.path} key={index} element={<route.component/>} />
                        ))}
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Content