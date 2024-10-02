import React, { /*useState*/ } from 'react';
import { useEffect, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GeneralUniformsFeeCollection.css'


function GeneralUniformsFeeCollection() {

    const [getTodayData, setTodayDate] = React.useState('');
    //const [getClassAPIList, setClassAPIList] = useState([]);

    const getFormData = (e) => {
        e.preventDefault()
        console.log("properly")
    }

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
                <h1 className='application-registration-main-heading mb-0'>UNIFORM FEE</h1>
                <div className='container-fluid container-with-button pt-2 pb-3'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>TODAY DATE</label><br />
                            <input type='text' className="input-filed" value={getTodayData} onChange={() => { }} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>ACTION</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Action is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>ADMN NO</label><br />
                            <input type='number' min={0} className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Action is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>ROLL NO</label><br />
                            <input type='number' min={0} className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Action is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>STUDENT</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Date of birth is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>CLASS</label><br />
                            <input type='text' value="NO" className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Father name is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>SECTION</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Mother name is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>FATHER</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Mother name is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>ADMN DT</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Guardian is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>MODE</label><br />
                            <select className="input-filed" defaultValue="CASH">
                                <option value="CASH">CASH</option>
                                <option value="ONLINE">ONLINE</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>RECEIPT #</label><br />
                            <input type='number' min={0} className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Guardian is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>RECEIPT DT</label><br />
                            <input type='text' className="input-filed" value={getTodayData} onChange={() => { }} />
                        </div>
                    </div>
                </div>
            </form>
            <div className='define-bus-stops-of-new-students-bg-container mt-4'>
                <h1 className='define-bus-stops-of-new-students-main-heading mb-0'>UNIFORM FEE TABLE</h1>
                <div className='container-fluid pt-2'>
                    <div className='row'>
                        <div className='col-xs-12 define-bus-stops-of-new-students-table-container mb-3'>
                            <table className="define-bus-stops-of-new-students-table">
                                <tr>
                                    <th>SELECT</th>
                                    <th>DESCRIPTION OF UNIFORM ITEM</th>
                                    <th>RATE</th>
                                </tr>
                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>PRE-PRIMARY UNIFORM A/C</td>
                                    <td>500.00</td>
                                </tr>
                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>SHIRTS 1-2 A/C</td>
                                    <td>325.00</td>
                                </tr>
                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>SHIRTS 3-5 A/C</td>
                                    <td>350.00</td>
                                </tr>
                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>SHIRTS 6-7 A/C</td>
                                    <td>375.00</td>
                                </tr>
                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>SHIRTS 8-10 A/C</td>
                                    <td>400.00</td>
                                </tr>
                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>KNICKERS 1-2 A/C</td>
                                    <td>300.00</td>
                                </tr>
                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>KNICKERS 3-5 A/C</td>
                                    <td>325.00</td>
                                </tr>
                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>TROUSERS 6-7 A/C</td>
                                    <td>500.00</td>
                                </tr>
                                <tfoot>
                                    <th></th>
                                    <th>TOTAL AMOUNT TO COLLECT</th>
                                    <th>0.00</th>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div>
                        <label className='input-label'>COLLECT RS</label><br />
                        <input type='text' className="collection-below-input" value="0.00" onChange={() => { }} />
                    </div>
                    <div className='define-bus-stops-of-new-students-buttons-container pt-4 pb-4'>
                        <div>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-primary' type='button'>NEW</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-secondary' type='submit'>EDIT</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-danger' type='button'>DELETE</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-success' type='button'>PRINT</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-info' type='button'>HELP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralUniformsFeeCollection;

