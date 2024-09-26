import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';


import './PaymentVochers.css'

function PaymentVochers() {

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


    return (
        <>
            <div className='define-vehicles-for-new-students-bg-container'>
                <h1 className='define-vehicles-for-new-students-main-heading mb-0'>PAYMENT VOCHERS</h1>
                <div className='container-fluid pt-2'>
                    <div className='row'>
                        <div className='col-xs-12 define-vehicles-for-new-students-table-container mb-3'>
                            <table className="define-vehicles-for-new-students-table">
                                <tr>
                                    <th>B.R CODE</th>
                                    <th>NAME OF THE BRANCH</th>
                                </tr>
                                <tr>
                                    <td>40000</td>
                                    <td>K.V.M EDUCATION SOCIETY</td>
                                </tr>
                                <tr>
                                    <td>40001</td>
                                    <td>K.V.M TALENT HIGH SCHOOL</td>
                                </tr>
                                <tr>
                                    <td>40002</td>
                                    <td>K.V.M ENTERPRISES</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='define-vehicles-for-new-students-buttons-container pt-4 pb-4'>
                        <div>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-primary' type='button'>SUBMIT</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-success' type='button'>HELP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentVochers;