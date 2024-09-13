import './DefineVehiclesForNewStudents.css'

function DefineVehiclesForNewStudents() {
    return (
        <div className='define-vehicles-for-new-students-bg-container'>
            <h1 className='define-vehicles-for-new-students-main-heading mb-0'>AREAS MASTER</h1>
            <div className='container-fluid pt-2'>
                <div className='row'>
                    <div className='col-xs-12 define-vehicles-for-new-students-table-container mb-3'>
                        <table className="define-vehicles-for-new-students-table">
                            <tr>
                                <th>VEHICLE TYPE</th>
                                <th>VEHICLE NO</th>
                                <th>AREA CODE</th>
                                <th>AREA[STOP] NAME</th>
                                <th>KILOMETERS</th>
                                <th>FARE-RS</th>
                            </tr>
                            <tr>
                                <td>ROUTE NO.1</td>
                                <td>TS08UF2268</td>
                                <td>101</td>
                                <td>DUNDIGAL</td>
                                <td>0.00</td>
                                <td>140.00</td>
                            </tr>
                            <tr>
                                <td>ROUTE NO.1</td>
                                <td>TS08UF2268</td>
                                <td>102</td>
                                <td>DOMARA POCHAMPALLY</td>
                                <td>0.00</td>
                                <td>140.00</td>
                            </tr>
                            <tr>
                                <td>ROUTE NO.1</td>
                                <td>TS08UF2268</td>
                                <td>103</td>
                                <td>GANDIMAISAMA</td>
                                <td>0.00</td>
                                <td>130.00</td>
                            </tr>
                            <tr>
                                <td>ROUTE NO.1</td>
                                <td>TS08UF2268</td>
                                <td>104</td>
                                <td>SATYAM COMPUTERS</td>
                                <td>0.00</td>
                                <td>100.00</td>
                            </tr>
                            <tr>
                                <td>ROUTE NO.1</td>
                                <td>TS08UF2268</td>
                                <td>105</td>
                                <td>BAHADURPALLY X RODES</td>
                                <td>0.00</td>
                                <td>100.00</td>
                            </tr>
                            <tr>
                                <td>ROUTE NO.3</td>
                                <td>TS08UF2268</td>
                                <td>103</td>
                                <td>GANDIMAISAMA</td>
                                <td>0.00</td>
                                <td>130.00</td>
                            </tr>
                            <tr>
                                <td>ROUTE NO.2</td>
                                <td>TS08UF2268</td>
                                <td>103</td>
                                <td>SURARAM COLONY</td>
                                <td>0.00</td>
                                <td>130.00</td>
                            </tr>
                            <tr>
                                <td>ROUTE NO.3</td>
                                <td>TS08UF2268</td>
                                <td>103</td>
                                <td>GANDIMAISAMA</td>
                                <td>0.00</td>
                                <td>130.00</td>
                            </tr>
                            <tr>
                                <td>ROUTE NO.1</td>
                                <td>TS08UF2268</td>
                                <td>103</td>
                                <td>SAI BABA NAGAR</td>
                                <td>0.00</td>
                                <td>130.00</td>
                            </tr>
                            <tr>
                                <td>ROUTE NO.2</td>
                                <td>TS08UF2268</td>
                                <td>103</td>
                                <td>GANDIMAISAMA</td>
                                <td>0.00</td>
                                <td>130.00</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='define-vehicles-for-new-students-buttons-container pt-4 pb-4'>
                    <div>
                        <button className='define-vehicles-for-new-students-buttons btn btn-primary' type='button'>NEW</button>
                        <button className='define-vehicles-for-new-students-buttons btn btn-danger' type='button'>DELETE</button>
                        <button className='define-vehicles-for-new-students-buttons btn btn-success' type='button'>SAVE</button>
                        <button className='define-vehicles-for-new-students-buttons btn btn-warning' type='button'>CANCEL</button>
                        <button className='define-vehicles-for-new-students-buttons btn btn-info' type='button'>HELP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefineVehiclesForNewStudents;