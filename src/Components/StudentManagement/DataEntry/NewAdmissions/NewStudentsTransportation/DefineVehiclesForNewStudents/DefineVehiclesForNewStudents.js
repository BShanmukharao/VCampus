import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';


import './DefineVehiclesForNewStudents.css'

function DefineVehiclesForNewStudents() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*useEffect(() => {
        const getAreasMasterData = async () => {
            try {
                const AREASMASTERURL = "https://visualcampus.in/API/api/VCSync/PostListArea_Mas?Key=ASCTEST"
                const response = await fetch(AREASMASTERURL)
                console.log(response)
            } catch (err) {
                console.log(err.message);
            }
        };
        getAreasMasterData();
    }, []);*/

    const getPopUpFormData = (e) => {
        e.preventDefault();
    }

    return (
        <>
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
                            <button className='define-bus-stops-of-new-students-buttons btn btn-primary' type='button' onClick={handleShow}>ADD</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-secondary' type='submit'>EDIT</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-danger' type='button'>DELETE</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-success' type='button'>SAVE</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-info' type='button'>HELP</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <form onSubmit={getPopUpFormData}>
                        <Modal.Header closeButton>
                            <Modal.Title className='pop-up-define-vehicles-for-new-students-main-heading'>ADD NEW AREAS MASTER</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='mb-2'>
                                <label className='pop-up-define-vehicles-for-new-students-label mb-1'>VEHICLE TYPE</label><br />
                                <select className='pop-up-define-vehicles-for-new-students-input-filed' >
                                    <option value="ROUTE NO.1">ROUTE NO.1</option>
                                    <option value="ROUTE NO.2">ROUTE NO.2</option>
                                    <option value="ROUTE NO.3">ROUTE NO.3</option>
                                </select>
                            </div>
                            <div className='mb-2'>
                                <label className='pop-up-define-vehicles-for-new-students-label mb-1'>VEHICLE NO</label><br />
                                <input type='text' className='pop-up-define-vehicles-for-new-students-input-filed' />
                            </div>
                            <div className='mb-2'>
                                <label className='pop-up-define-vehicles-for-new-students-label mb-1'>AREA CODE</label><br />
                                <input type='text' className='pop-up-define-vehicles-for-new-students-input-filed' />
                            </div>
                            <div className='mb-2'>
                                <label className='pop-up-define-vehicles-for-new-students-label mb-1'>AREA[STOP] NAME</label><br />
                                <input type='text' className='pop-up-define-vehicles-for-new-students-input-filed' />
                            </div>
                            <div className='mb-2'>
                                <label className='pop-up-define-vehicles-for-new-students-label mb-1'>KILOMETERS</label><br />
                                <input type='text' className='pop-up-define-vehicles-for-new-students-input-filed' />
                            </div>
                            <div className='mb-2'>
                                <label className='pop-up-define-vehicles-for-new-students-label mb-1'>FARE-RS</label><br />
                                <input type='text' className='pop-up-define-vehicles-for-new-students-input-filed' />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" type='submit' className='define-bus-stops-of-new-students-buttons' onClick={handleClose}>
                                SAVE
                            </Button>
                            <Button variant="danger" className='define-bus-stops-of-new-students-buttons' onClick={handleClose}>
                                CANCEL
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        </>
    )
}

export default DefineVehiclesForNewStudents;