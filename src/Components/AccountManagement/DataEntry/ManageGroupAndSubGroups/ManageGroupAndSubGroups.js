import React, { /*useState*/ } from 'react';
import { useEffect, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ManageGroupAndSubGroups.css'
import axios from 'axios';

function ManageGroupsSubAndGroups() {

    const [getTodayData, setTodayDate] = React.useState('');
    //const [getClassAPIList, setClassAPIList] = useState([]);

    const getFormData = (e) => {
        e.preventDefault()
        console.log("properly")
    }

    /*const showdata = () => {
        {
         getClassAPIList[0].map((eachClassItem, key) => (
                console.log(eachClassItem)
            ))
        }
    }*/

    /*
    <option value="nursary">NURSARY</option>
                                <option value="L.K.G">L.K.G</option>
                                <option value="U.K.G">U.K.G</option>
                                <option value="class-1">CLASS-1</option>
                                <option value="class-2">CLASS-2</option>
                                <option value="class-3">CLASS-3</option>
                                <option value="class-4">CLASS-4</option>
                                <option value="class-5">CLASS-5</option>
                                <option value="class-6">CLASS-6</option>
                                <option value="class-7">CLASS-7</option>
                                <option value="class-8">CLASS-8</option>
                                <option value="class-9">CLASS-9</option>
                                <option value="class-10">CLASS-10</option>
    */

    useEffect(() => {
        // get today date function

        const currentDate = new Date()

        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;
        setTodayDate(formattedDate)
    }, []);


    return (
        <div className='application-registration-bg-container'>
            <form className='application-registration-form-bg-container' onSubmit={getFormData}>
                <h1 className='application-registration-main-heading mb-0'>MANAGE GROUP'S</h1>
                <div className='container-fluid container-with-button pt-2'>
                    <div className='row'>
                        <span>[ Move From : ]</span>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>G.L HEAD</label><br />
                            <select className="input-filed" defaultValue="ADMINISTRATIVE EXPENES">
                                <option value="ADMINISTRATIVE EXPENES">ADMINISTRATIVE EXPENES</option>
                                <option value="nursary">NURSARY</option>
                                <option value="L.K.G">L.K.G</option>
                                <option value="U.K.G">U.K.G</option>
                                <option value="class-1">CLASS-1</option>
                                <option value="class-2">CLASS-2</option>
                                <option value="class-3">CLASS-3</option>
                                <option value="class-4">CLASS-4</option>
                                <option value="class-5">CLASS-5</option>
                                <option value="class-6">CLASS-6</option>
                                <option value="class-7">CLASS-7</option>
                                <option value="class-8">CLASS-8</option>
                                <option value="class-9">CLASS-9</option>
                                <option value="class-10">CLASS-10</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>MAIN GROUP</label><br />
                            <input type='text' className="input-filed" />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>GROUP</label><br />
                            <input type='text' className="input-filed" />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>SUB-GROUP</label><br />
                            <input type='text' className="input-filed" />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <span>[ Move To : ]</span>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>MAIN-GROUP</label><br />
                            <select className="input-filed" defaultValue="EXPENDITURE">
                                <option value="EXPENDITURE">EXPENDITURE</option>
                                <option value="L.K.G">L.K.G</option>
                                <option value="U.K.G">U.K.G</option>
                                <option value="class-1">CLASS-1</option>
                                <option value="class-2">CLASS-2</option>
                                <option value="class-3">CLASS-3</option>
                                <option value="class-4">CLASS-4</option>
                                <option value="class-5">CLASS-5</option>
                                <option value="class-6">CLASS-6</option>
                                <option value="class-7">CLASS-7</option>
                                <option value="class-8">CLASS-8</option>
                                <option value="class-9">CLASS-9</option>
                                <option value="class-10">CLASS-10</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>SUB-GROUP</label><br />
                            <select className="input-filed" defaultValue="DIRECT EXPENSES">
                                <option value="DIRECT EXPENSES">DIRECT EXPENSES</option>
                                <option value="nursary">NURSARY</option>
                                <option value="L.K.G">L.K.G</option>
                                <option value="U.K.G">U.K.G</option>
                                <option value="class-1">CLASS-1</option>
                                <option value="class-2">CLASS-2</option>
                                <option value="class-3">CLASS-3</option>
                                <option value="class-4">CLASS-4</option>
                                <option value="class-5">CLASS-5</option>
                                <option value="class-6">CLASS-6</option>
                                <option value="class-7">CLASS-7</option>
                                <option value="class-8">CLASS-8</option>
                                <option value="class-9">CLASS-9</option>
                                <option value="class-10">CLASS-10</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>GROUP</label><br />
                            <select className="input-filed" defaultValue="ADMINISTRATIVE EXPENES">
                                <option value="ADMINISTRATIVE EXPENES">ADMINISTRATIVE EXPENES</option>
                                <option value="nursary">NURSARY</option>
                                <option value="L.K.G">L.K.G</option>
                                <option value="U.K.G">U.K.G</option>
                                <option value="class-1">CLASS-1</option>
                                <option value="class-2">CLASS-2</option>
                                <option value="class-3">CLASS-3</option>
                                <option value="class-4">CLASS-4</option>
                                <option value="class-5">CLASS-5</option>
                                <option value="class-6">CLASS-6</option>
                                <option value="class-7">CLASS-7</option>
                                <option value="class-8">CLASS-8</option>
                                <option value="class-9">CLASS-9</option>
                                <option value="class-10">CLASS-10</option>
                            </select>
                        </div>
                    </div>
                    <div className='buttons-container pt-4 pb-4'>
                        <button className='buttons btn btn-primary' type='button'>BACK</button>
                        <button className='buttons btn btn-success' type='submit'>SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ManageGroupsSubAndGroups;

