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
import DefineRemarks from '../StudentManagement/DataEntry/ProgressReportData/AutoRemarks/DefineRemarks/DefineRemarks'
import DefineAutoRemarks from '../StudentManagement/DataEntry/ProgressReportData/AutoRemarks/DefineAutoRemarks/DefineAutoRemarks'
import MonthlyAttendance from '../StudentManagement/DataEntry/MonthlyAttendance/MonthlyAttendance'
import SetWorkingDays from '../StudentManagement/DataEntry/SetWorkingDays/SetWorkingDays'
import DefineVehicles from '../StudentManagement/DataEntry/Transportation/DefineVehicles/DefineVehicles'
import DefineBusStops from '../StudentManagement/DataEntry/Transportation/DefineBusStops/DefineBusStops'
import DefineTypes from '../StudentManagement/DataEntry/Greetings/DefineTypes/DefineTypes'
import DefineGreetings from '../StudentManagement/DataEntry/Greetings/DefineGreetings/DefineGreetings'
import CreateGreetings from '../StudentManagement/DataEntry/Greetings/CreateGreetings/CreateGreetings'
import BonafideCumStudyCertificate from '../StudentManagement/DataEntry/BonafideCumStudyCertificate/BonafideCumStudyCertificate'
import BonafideCumConductCertificate from '../StudentManagement/DataEntry/BonafideCumConductCertificate/BonafideCumConductCertificate'
import TransferCertificateAndRecoedSheet from '../StudentManagement/DataEntry/TransferCertificateAndRecoedSheet/TransferCertificateAndRecoedSheet'
import DefineType from '../StudentManagement/DataEntry/Certificates/DefineType/DefineType'
import CreateCertificate from '../StudentManagement/DataEntry/Certificates/CreateCertificate/CreateCertificate'
import DefineCertificate from '../StudentManagement/DataEntry/Certificates/DefineCertificate/DefineCertificate'


//AccountManagement Routing Paths

import ReceiptVochers from '../AccountManagement/DataEntry/ReceiptVochers/ReceiptVochers';
import PaymentVochers from '../AccountManagement/DataEntry//PaymentVochers/PaymentVochers';
import JournalVochers from '../AccountManagement/DataEntry/JournalVochers/JournalVochers';
import OpeningBalances from '../AccountManagement/DataEntry/OpeningBalances/OpeningBalances';
import ChangeBranches from '../AccountManagement/DataEntry/ChangeBranches/ChangeBranches';
import CharOfAccounts from '../AccountManagement/DataEntry/CharOfAccounts/CharOfAccounts';
import PartyMaster from '../AccountManagement/DataEntry/PartysMaster/PartysMaster';
import PartwiseOBS from '../AccountManagement/DataEntry/PartywiseOBS/PartywiseOBS';
import ManageGroupsSubAndGroups from '../AccountManagement/DataEntry/ManageGroupAndSubGroups/ManageGroupAndSubGroups';

//
import SchoolFeeCollections from '../StudentManagement/DataEntry/FeeCollections/SchoolFeeCollections/SchoolFeeCollections'
import MiscellaneousFeeCollection from '../StudentManagement/DataEntry/FeeCollections/MiscellaneousFeeCollection/MiscellaneousFeeCollection'
import UniformStocksEntry from '../StudentManagement/DataEntry/FeeCollections/UniformStocksEntry/UniformStocksEntry'
import GeneralUniformsFeeCollection from '../StudentManagement/DataEntry/FeeCollections/GeneralUniformsFeeCollection/GeneralUniformsFeeCollection'
import BookStoreStocksEntry from '../StudentManagement/DataEntry/FeeCollections/BookStoreStocksEntry/BookStoreStocksEntry'
import BooksFeeCollection from '../StudentManagement/DataEntry/FeeCollections/BooksFeeCollection/BooksFeeCollection'


const routes = [
    { path: '/', component: HomeScreen },
    { path: '/ApplicationRegistrationFee', component: ApplicationRegistrationFee },
    { path: '/define-bus-stops-of-new-students', component: DefineBusStopsOfNewStudents },
    { path: '/AllotmentOfAdmnNos', component: AllotmentOfAdmnNos },
    { path: '/BooksFeeofNewStudents', component: BooksFeeofNewStudents },
    { path: '/DefineVehiclesForNewStudents', component: DefineVehiclesForNewStudents },
    { path: '/CreateMarksData', component: CreateMarksData },
    { path: "/EnterOrEditMarks", component: EnterOrEditMarks },
    { path: "/DeleteMarksData", component: DeleteMarksData },
    { path: "/RecreateMarksData", component: RecreateMarksData },
    { path: "/BackUpMarksData", component: BackUpMarksData },
    { path: "/ClassFacultiesList", component: ClassFacultiesList },
    { path: "/SubjectWiseFaculties", component: SubjectWiseFaculties },
    { path: "/DefineRemarksGroup", component: DefineRemarksGroup },
    { path: "/DefineRemarks", component: DefineRemarks },
    { path: "/DefineAutoRemarks", component: DefineAutoRemarks },
    { path: "/MonthlyAttendance", component: MonthlyAttendance },
    { path: "/SetWorkingDays", component: SetWorkingDays },
    { path: "/DefineVehicles", component: DefineVehicles },
    { path: "/DefineBusStops", component: DefineBusStops },
    { path: "/DefineTypes", component: DefineTypes },
    { path: "/DefineGreetings", component: DefineGreetings },
    { path: "/CreateGreetings", component: CreateGreetings },
    { path: "/BonafideCumStudyCertificate", component: BonafideCumStudyCertificate },
    { path: "/BonafideCumConductCertificate", component: BonafideCumConductCertificate },
    { path: "/TransferCertificateAndRecoedSheet", component: TransferCertificateAndRecoedSheet },
    { path: "/Certificates/DefineType", component: DefineType },
    { path: "/Certificates/CreateCertificate", component: CreateCertificate },
    { path: "/Certificates/DefineCertificate", component: DefineCertificate },

    // AccountManagement Routing
    { path: "/AM-ReceiptVouchers", component: ReceiptVochers },
    { path: "/AM-PaymentVouchers", component: PaymentVochers },
    { path: "/AM-JournalVouchers", component: JournalVochers },
    { path: "/AM-OpeningBalances", component: OpeningBalances },
    { path: "/AM-ChangeBranches", component: ChangeBranches },
    { path: "/AM-ChartofAccounts", component: CharOfAccounts },
    { path: "/AM-PartysMasters", component: PartyMaster },
    { path: "/AM-Partywise-O.Bs", component: PartwiseOBS },
    { path: "/AM-ManageGroupsSub-Groups", component: ManageGroupsSubAndGroups },

    //
    { path: "/school-fee-collections", component: SchoolFeeCollections },
    { path: "/miscellaneous-fee-collection", component: MiscellaneousFeeCollection },
    { path: "/uniform-stocks-entry", component: UniformStocksEntry },
    { path: "/general-uniforms-fee-collection", component: GeneralUniformsFeeCollection },
    { path: "/book-store-stocks-entry", component: BookStoreStocksEntry },
    { path: "/books-fee-collection", component: BooksFeeCollection }
];

export const Home = () => {

    return (
        <div className='home-bg-container'>
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

