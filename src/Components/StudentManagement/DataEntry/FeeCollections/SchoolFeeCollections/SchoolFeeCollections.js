import React, { /*useState*/ } from 'react';
import { useEffect, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SchoolFeeCollections.css'
import axios from 'axios';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';


const data = [
    {
        type: "1",
        particulars: "raju",
        amount: 100,
        concess: 120,
        netfee: 250
    },
    {
        type: "2",
        particulars: "ravi",
        amount: 130,
        concess: 100,
        netfee: 150
    },
    {
        type: "3",
        particulars: "kavi",
        amount: 100,
        concess: 90,
        netfee: 300
    },
    {
        type: "1",
        particulars: "raju",
        amount: 100,
        concess: 120,
        netfee: 250
    },
    {
        type: "2",
        particulars: "ravi",
        amount: 130,
        concess: 100,
        netfee: 150
    },
    {
        type: "3",
        particulars: "kavi",
        amount: 100,
        concess: 90,
        netfee: 300
    },
];

function SchoolFeeCollections() {

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


    const columns = useMemo(

        () => [
            {
                accessorKey: 'type',
                header: 'type'.toUpperCase(),
                size: 50,
                muiTableHeadCellProps: { sx: { fontSize: '12px', color: 'grey' } },
            },
            {
                accessorKey: 'particulars',
                header: 'particulars'.toUpperCase(),
                size: 50,
                muiTableHeadCellProps: { sx: { fontSize: '12px', color: 'grey' } },
            },
            {
                accessorKey: 'amount',
                header: 'amount'.toUpperCase(),
                size: 50,
                muiTableHeadCellProps: { sx: { fontSize: '12px', color: 'grey' } },
            },
            {
                accessorKey: 'concess',
                header: 'concess'.toUpperCase(),
                size: 50,
                muiTableHeadCellProps: { sx: { fontSize: '12px', color: 'grey' } },
            },
            {
                accessorKey: 'netfee',
                header: 'NET FEE',
                size: 50,
                muiTableHeadCellProps: { sx: { fontSize: '12px', color: 'grey' } },
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data,
    });


    return (
        <div className='application-registration-bg-container'>
            <form className='application-registration-form-bg-container' onSubmit={getFormData}>
                <h1 className='application-registration-main-heading mb-0'>SCHOOL FEE COLLECTIONS</h1>
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
                            <label className='input-label'>T.C CASE ?</label><br />
                            <input type='text' value="NO" className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Father name is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>CLASS</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Mother name is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>SECTION</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Mother name is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>FATHER</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Guardian is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
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
                            <label className='input-label'>DATE</label><br />
                            <input type='text' className="input-filed" value={getTodayData} required onInvalid={(e) => (e.target.setCustomValidity('Marks is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>MAX CONCESS</label><br />
                            <input type='text' className="input-filed" value="0.00" required onInvalid={(e) => (e.target.setCustomValidity('Marks is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>MOBILE NO</label><br />
                            <input type='text' className="input-filed" value="0" required onInvalid={(e) => (e.target.setCustomValidity('Marks is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>YEAR</label><br />
                            <input type='text' value="2023-24" className="input-filed" />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>AREA NAME</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Issue date is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                    </div>
                </div>
            </form>
            <div className='define-bus-stops-of-new-students-bg-container mt-4'>
            <h1 className='define-bus-stops-of-new-students-main-heading mb-0'>SCHOOL FEE TABLE</h1>
            <div className='container-fluid pt-2'>
                <div className='row'>
                    <div className='col-xs-12 define-bus-stops-of-new-students-table-container mb-3'>
                        <table className="define-bus-stops-of-new-students-table">
                            <tr>
                                <th>SELECT</th>
                                <th>S.NO</th>
                                <th>MONTH/TEAM</th>
                                <th>RECEIVABLE</th>
                                <th>RECEIVED</th>
                                <th>RECEIPT NO.</th>
                                <th>RECEIPT DT.</th>
                                <th>BALANCE</th>
                            </tr>
                            <tr>
                                <td><input type='checkbox'/></td>
                                <td>0</td>
                                <td></td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <th>0</th>
                                <th>--</th>
                                <th>0.00</th>
                            </tr>
                            <tfoot>
                                <th>TOTAL</th>
                                <th></th>
                                <th>0.00</th>
                                <th>0.00</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>0.00</th>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className='define-bus-stops-of-new-students-buttons-container pt-4 pb-4'>
                    <div>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-primary' type='button'>NEW</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-secondary' type='submit'>EDIT</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-danger' type='button'>DELETE</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-success' type='button'>SAVE</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-info' type='button'>HELP</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SchoolFeeCollections;

