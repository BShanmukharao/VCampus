import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';


import './CreateCertificate.css'

function CreateCertificate() {

    const [showAddPopUp, setshowAddPopUp] = useState(false)
    const [showUpdatePopUp, setshowUpdatePopUp] = useState(false)

    const handleAddPopUpClose = () => setshowAddPopUp(false);
    const handleAddPopUpShow = () => setshowAddPopUp(true);

    const handleUpdatePopUpClose = () => setshowUpdatePopUp(false);
    const handleUpdatePopUpShow = () => setshowUpdatePopUp(true);


    /*useEffect(() => {
        const getAreasMasterData = async () => {
            //const apiKey = 'ASCTEST';
            const URL = `https://visualcampus.in/API/api/VCSync/PostListArea_Mas`;
            const OPTION = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            try {
                const response = await fetch(URL, OPTION)
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
                <h1 className='define-vehicles-for-new-students-main-heading mb-0'>CERTIFICATE TYPES</h1>
                <div className='container-fluid pt-2'>
                    <div className='row'>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>CERTIFICATE</label><br />
                        <select className="input-filed" defaultValue="BONAFIDE CERTIFICATE">
                            <option value="BONAFIDE CERTIFICATE">BONAFIDE CERTIFICATE</option>
                            <option value="TRANSFER CERTIFICATE">TRANSFER CERTIFICATE</option>
                            <option value="CONDUCT CERTIFICATE">CONDUCT CERTIFICATE</option>
                            <option value="MERIT CERTIFICATE">MERIT CERTIFICATE</option>
                        </select>
                    </div>
                        <div className='col-xs-12 define-vehicles-for-new-students-table-container mt-3 mb-3'>
                            <table className="define-vehicles-for-new-students-table">
                                <tr>
                                    <th>ADMN NO</th>
                                    <th>STUDENT NAME</th>
                                    <th>CLASS</th>
                                    <th>SECTION</th>
                                    <th>ROLL NO</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='define-vehicles-for-new-students-buttons-container pt-4 pb-4'>
                        <div>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-primary' type='button' onClick={handleAddPopUpShow}>ADD</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-secondary' type='submit' onClick={handleUpdatePopUpShow}>EDIT</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-danger' type='button'>DELETE</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-info' type='button'>HELP</button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showAddPopUp} onHide={handleAddPopUpClose}>
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
                        <Button variant="success" type='submit' className='define-bus-stops-of-new-students-buttons' onClick={handleAddPopUpClose}>
                            SAVE
                        </Button>
                        <Button variant="danger" className='define-bus-stops-of-new-students-buttons' onClick={handleAddPopUpClose}>
                            CANCEL
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

            <Modal show={showUpdatePopUp} onHide={setshowUpdatePopUp}>
                <form onSubmit={getPopUpFormData}>
                    <Modal.Header closeButton>
                        <Modal.Title className='pop-up-define-vehicles-for-new-students-main-heading'>EDIT AREAS MASTER</Modal.Title>
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
                        <Button variant="success" type='submit' className='define-bus-stops-of-new-students-buttons' onClick={handleUpdatePopUpClose}>
                            SAVE
                        </Button>
                        <Button variant="danger" className='define-bus-stops-of-new-students-buttons' onClick={handleUpdatePopUpClose}>
                            CANCEL
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>
    )
}

export default CreateCertificate;