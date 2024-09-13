import 'bootstrap/dist/css/bootstrap.min.css';
import './DefineBusStopsOfNewStudents.css'

function DefineBusStopsOfNewStudents() {
    return (
        <div className='define-bus-stops-of-new-students-bg-container'>
            <h1 className='define-bus-stops-of-new-students-main-heading mb-0'>VEHICLES MASTER</h1>
            <div className='container-fluid pt-2'>
                <div className='row'>
                    <div className='col-xs-12 define-bus-stops-of-new-students-table-container mb-3'>
                        <table className="define-bus-stops-of-new-students-table">
                            <tr>
                                <th>CODE</th>
                                <th>VEHICLE TYPE</th>
                                <th>VEHICLE NO</th>
                                <th>DRIVER NAME</th>
                                <th>MOBILE NO</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>ROUTE NO 1</td>
                                <td>TS08UF2268</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>ROUTE NO 2</td>
                                <td>AP28TA5436</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>ROUTE NO 3</td>
                                <td>AP28TA3447</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='define-bus-stops-of-new-students-buttons-container pt-4 pb-4'>
                    <div>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-primary' type='button'>NEW</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-secondary' type='submit'>EDIT</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-danger' type='button'>DELETE</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-success' type='button'>SAVE</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-warning' type='button'>CANCEL</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-info' type='button'>HELP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefineBusStopsOfNewStudents;