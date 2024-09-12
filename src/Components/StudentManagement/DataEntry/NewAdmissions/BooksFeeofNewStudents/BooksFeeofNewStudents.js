import React, { /*useState*/ } from 'react';
import { useEffect, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BooksFeeofNewStudents.css'
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

function BooksFeeofNewStudent() {

    const [getTodayData, setTodayDate] = React.useState('');
    //const [getClassAPIList, setClassAPIList] = useState([]);

    const getFormData = (e) => {
        e.preventDefault()
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

        // setClassAPIList

        // Define an asynchronous function
       /*const fetchData = async () => {
            try {
                // Make the API call using axios and await the response
                const classURL = 'https://visualcampus.in/API/api/TeacherController/GETListAllClass?Clientid=1&Branchid=1&EmpId=1'
                axios.get(classURL)
                    .then(response => {
                        const data = response.data.Response;
                        const newObject = data.map((eachItem) => ({
                            "CLASS": eachItem.CLASS,
                            "CLASSCODE": eachItem.CLASS_CODE
                        }))
                        setClassAPIList(prevItems => [...prevItems, newObject]);
                    })
            } catch (error) {
                console.log(error)
            }
        };*/
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
        <div className='books-fee-of-new-students-bg-container'>
            <form className='books-fee-of-new-students-form-bg-container' onSubmit={getFormData}>
                <h1 className='books-fee-of-new-students-main-heading mb-0'>BOOKS FEE OF NEW STUDENT</h1>
                <div className='container-fluid container-with-button pt-2'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>TODAY DATE</label><br />
                            <input type='text' className="input-filed" value={getTodayData} onChange={() => { }} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>MODE</label><br />
                            <input type='text' className="input-filed"  required onInvalid={(e) => (e.target.setCustomValidity('Mode is required'))} onInput={(e) => (e.target.setCustomValidity(''))}/>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>ADMN.NO</label><br />
                            <input type='number' className="input-filed"  required onInvalid={(e) => (e.target.setCustomValidity('Admn.no is required'))} onInput={(e) => (e.target.setCustomValidity(''))}/>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>ROLL NO</label><br />
                            <input type='number' className="input-filed"  required onInvalid={(e) => (e.target.setCustomValidity('Roll.no is required'))} onInput={(e) => (e.target.setCustomValidity(''))}/>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>STUDENT NAME</label><br />
                            <input type='text' className="input-filed"  required onInvalid={(e) => (e.target.setCustomValidity('Student name is required'))} onInput={(e) => (e.target.setCustomValidity(''))}/>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>CLASS</label><br />
                            <select className="input-filed" defaultValue="NURSARY">
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
                            <label className='input-label'>SECTION</label><br />
                            <select className="input-filed" defaultValue="SECTION-A">
                                <option value="SECTION-A">SECTION-A</option>
                                <option value="SECTION-B">SECTION-B</option>
                                <option value="SECTION-C">SECTION-C</option>
                                <option value="SECTION-D">SECTION-D</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>FATHER NAME</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Father name is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>ADMN.DT</label><br />
                            <input type='date' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Admt.dt is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>MODE</label><br />
                            <select className="input-filed" defaultValue="CASH">
                                <option value="cash">CASH</option>
                                <option value="online">ONLINE</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>RECEIPT</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Receipt is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>DATE</label><br />
                            <input type='date' className="input-filed" value={getTodayData} onChange={() => { }} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>CONCESS</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Concess name is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>CREDITED ?</label>
                            <input type='checkbox' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Date of birth is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                    </div>
                    <div className='books-fee-of-new-students-buttons-container pt-4 pb-4'>
                        <button className='books-fee-of-new-students-buttons btn btn-primary' type='button'>BACK</button>
                        <button className='books-fee-of-new-students-buttons btn btn-success' type='submit'>SUBMIT</button>
                    </div>
                </div>
            </form>
            <div className='books-fee-of-new-students-table-bg-container mt-4'>
                <h1 className='application-registration-main-heading mb-0'>BOOKS FEE OF NEW STUDENT</h1>
                <MaterialReactTable table={table} />
            </div>
        </div>
    )
}

export default BooksFeeofNewStudent

