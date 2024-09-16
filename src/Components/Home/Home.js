import { Routes, Route } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar'
//import Header from '../Header/Header'
import { Header } from '../Header/Header'
import './Home.css'
import './Homejquery'

import HomeScreen from '../StudentManagement/DataEntry/NewAdmissions/HomeScreen/HomeScreen'
import ApplicationRegistrationFee from '../StudentManagement/DataEntry/NewAdmissions/ApplicationRegistrationFee/ApplicationRegistrationFee'
import BooksFeeofNewStudents from '../StudentManagement/DataEntry/NewAdmissions/BooksFeeofNewStudents/BooksFeeofNewStudents'
import AllotmentOfAdmnNos from '../StudentManagement/DataEntry/NewAdmissions/AllotmentOfAdmnNos/AllotmentOfAdmnNos'
import DefineBusStopsOfNewStudents from '../StudentManagement/DataEntry/NewAdmissions/NewStudentsTransportation/DefineBusStopsOfNewStudents/DefineBusStopsOfNewStudents'
import DefineVehiclesForNewStudents from '../StudentManagement/DataEntry/NewAdmissions/NewStudentsTransportation/DefineVehiclesForNewStudents/DefineVehiclesForNewStudents';
import CreateMarksData from '../StudentManagement/DataEntry/ProgressReportData/CreateMarksData/CreateMarksData'
import EnterOrEditMarks from '../StudentManagement/DataEntry/ProgressReportData/EnterOrEditMarks/EnterOrEditMarks'
import DeleteMarksData from '../StudentManagement/DataEntry/ProgressReportData/DeleteMarksData/DeleteMarksData'
import RecreateMarksData from '../StudentManagement/DataEntry/ProgressReportData/RecreateMarksData/RecreateMarksData'
import BackUpMarksData from '../StudentManagement/DataEntry/ProgressReportData/BackUpMarksData/BackUpMarksData'
import ClassFacultiesList from '../StudentManagement/DataEntry/ProgressReportData/ClassFacultiesList/ClassFacultiesList'
import SubjectWiseFaculties from '../StudentManagement/DataEntry/ProgressReportData/SubjectWiseFaculties/SubjectWiseFaculties'
import DefineRemarksGroup from '../StudentManagement/DataEntry/ProgressReportData/AutoRemarks/DefineRemarksGroup/DefineRemarksGroup'

const routes = [
    { path: '/', component: HomeScreen},
    { path: '/ApplicationRegistrationFee', component: ApplicationRegistrationFee },
    { path: '/DefineBusStopsOfNewStudents', component: DefineBusStopsOfNewStudents},
    { path: '/AllotmentOfAdmnNos', component: AllotmentOfAdmnNos },
    { path: '/BooksFeeofNewStudents', component: BooksFeeofNewStudents},
    { path: '/DefineVehiclesForNewStudents', component: DefineVehiclesForNewStudents},
    { path: '/CreateMarksData', component: CreateMarksData},
    { path: "/EnterOrEditMarks", component: EnterOrEditMarks},
    { path: "/DeleteMarksData", component: DeleteMarksData},
    { path: "/RecreateMarksData", component: RecreateMarksData},
    { path: "/BackUpMarksData", component: BackUpMarksData},
    { path: "/ClassFacultiesList", component: ClassFacultiesList},
    { path: "/SubjectWiseFaculties", component: SubjectWiseFaculties},
    { path : "/DefineRemarksGroup", component: DefineRemarksGroup}
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
