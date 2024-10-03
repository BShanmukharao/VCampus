import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import { ThreeDots, TailSpin/*,Puff, Rings, Oval, Bars, Circles, Header, Grid*/ } from 'react-loader-spinner';
import './DefineBusStopsOfNewStudents.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const apiConstraint = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    successAfterAdded: 'SUCCESSAFTERADDED',
    failureAfterAdded: 'FAILUREAFTERADDED',
    loading: 'LOADING',
    failure: 'FAILURE',
}

function DefineVehiclesForNewStudents() {

    const [showAddPopUp, setshowAddPopUp] = useState(false)
    const [getVehicleType, setVehicleType] = useState("BUS-1")
    const [getAreaName, setAreaName] = useState("")
    const [getKilometers, setKilometers] = useState(0)
    const [getFareFee, setFareFee] = useState(0)

    const handleAddPopUpClose = () => setshowAddPopUp(false);
    const handleAddPopUpShow = () => setshowAddPopUp(true);


    const [getSchoolData, setSchoolData] = useState([])
    const [getInitialStatus, setInitialStatus] = useState(apiConstraint.initial);

    useEffect(() => { getAreasMastersData() }, [])

    //https://visualcampus.in/API/api/VCSync/PostListArea_Mas
    //"proxy": "https://visualcampus.in",

    const getAreasMastersData = async () => {
        setInitialStatus(apiConstraint.loading)
        try {
            const Data = await fetch('/API/api/VCSync/PostListArea_Mas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "Key": "ASCTEST",
                })
            })
            const response = await Data.json();
            const responseList = response.Result;
            const updatedList = responseList.map(eachObject => ({
                areaName: eachObject.AREA,
                areaCode: eachObject.AREA_CODE,
                fareRs: eachObject.FARE,
                fareOne: eachObject.FARE_1,
                fareTwo: eachObject.FARE_2,
                fareThree: eachObject.FARE_3,
                fareFour: eachObject.FARE_4,
                fareFive: eachObject.FARE_5,
                fareSix: eachObject.FARE_6,
                fareSeven: eachObject.FARE_7,
                fareEigth: eachObject.FARE_8,
                fareNine: eachObject.FARE_9,
                fareTen: eachObject.FARE_10,
                fareEleven: eachObject.FARE_11,
                fareTwelve: eachObject.FARE_12,
                id: eachObject.ID,
                kilometers: eachObject.KILOMETERS,
                totalFee: eachObject.TOTAL_FEE,
                updatedDate: eachObject.UPDATED_ON,
                isUploaded: eachObject.UPLOADED,
                vehicleCode: eachObject.VEHCL_CODE,
                vehicleType: eachObject.VEHCL_TYPE
            }))
            setSchoolData(updatedList);
            setInitialStatus(apiConstraint.success);
        } catch (e) {
            setInitialStatus(apiConstraint.failure);
        }
    }

    const addButton = async () => {
        if ((getAreaName !== "")) {
            const newId = getSchoolData.length + 1;
            const formatted = new Date().toISOString().slice(0, 19);
            const newItem = [
                {
                    "ID": newId,
                    "vehcl_code": 0,
                    "vehcl_type": getVehicleType,
                    "area_code": 101,
                    "area": getAreaName,
                    "kilometers": getKilometers,
                    "fare": 0,
                    "fare_1": 0,
                    "fare_2": 0,
                    "fare_3": 0,
                    "fare_4": 0,
                    "fare_5": 0,
                    "fare_6": 0,
                    "fare_7": 0,
                    "fare_8": 0,
                    "fare_9": 0,
                    "fare_10": 0,
                    "fare_11": 0,
                    "fare_12": 0,
                    "total_fee": getFareFee,
                    "uploaded": true,
                    "updated_on": formatted,
                    "Key": "ASCTEST",
                    "Action": "A"
                },
                {
                    "ID": 99,
                    "vehcl_code": 8,
                    "vehcl_type": "VAN-6",
                    "area_code": 224,
                    "area": "ALWAL",
                    "kilometers": 1,
                    "fare": 300,
                    "fare_1": 0,
                    "fare_2": 0,
                    "fare_3": 0,
                    "fare_4": 0,
                    "fare_5": 0,
                    "fare_6": 0,
                    "fare_7": 0,
                    "fare_8": 0,
                    "fare_9": 0,
                    "fare_10": 0,
                    "fare_11": 0,
                    "fare_12": 0,
                    "total_fee": 0,
                    "uploaded": true,
                    "updated_on": "2024-09-24",
                    "Key": "ASCTEST",
                    "Action": "A"
                },
                {
                    "ID": 77,
                    "vehcl_code": 9,
                    "vehcl_type": "VAN-5",
                    "area_code": 223,
                    "area": "M E S COLONY",
                    "kilometers": 1,
                    "fare": 500,
                    "fare_1": 3,
                    "fare_2": 0,
                    "fare_3": 0,
                    "fare_4": 0,
                    "fare_5": 0,
                    "fare_6": 0,
                    "fare_7": 0,
                    "fare_8": 0,
                    "fare_9": 0,
                    "fare_10": 0,
                    "fare_11": 0,
                    "fare_12": 0,
                    "total_fee": 0,
                    "uploaded": true,
                    "updated_on": "2024-09-24",
                    "Key": "ASCTEST",
                    "Action": "A"
                },
                {
                    "ID": 99,
                    "vehcl_code": 8,
                    "vehcl_type": "VAN-6",
                    "area_code": 224,
                    "area": "CHINTAL",
                    "kilometers": 1,
                    "fare": 300,
                    "fare_1": 0,
                    "fare_2": 0,
                    "fare_3": 0,
                    "fare_4": 0,
                    "fare_5": 0,
                    "fare_6": 0,
                    "fare_7": 0,
                    "fare_8": 0,
                    "fare_9": 0,
                    "fare_10": 0,
                    "fare_11": 0,
                    "fare_12": 0,
                    "total_fee": 0,
                    "uploaded": true,
                    "updated_on": "2024-09-24",
                    "Key": "ASCTEST",
                    "Action": "A"
                },
                {
                    "ID": 77,
                    "vehcl_code": 9,
                    "vehcl_type": "VAN-5",
                    "area_code": 223,
                    "area": "BALNAGAR",
                    "kilometers": 1,
                    "fare": 500,
                    "fare_1": 3,
                    "fare_2": 0,
                    "fare_3": 0,
                    "fare_4": 0,
                    "fare_5": 0,
                    "fare_6": 0,
                    "fare_7": 0,
                    "fare_8": 0,
                    "fare_9": 0,
                    "fare_10": 0,
                    "fare_11": 0,
                    "fare_12": 0,
                    "total_fee": 0,
                    "uploaded": true,
                    "updated_on": "2024-09-24",
                    "Key": "ASCTEST",
                    "Action": "A"
                }
            ]

            handleAddPopUpClose()

            try {
                setInitialStatus(apiConstraint.loading)
                const addedData = await fetch('/API/api/VCSync/PostArea_Mas', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newItem)
                })
                if (addedData.ok === true) {
                    setInitialStatus(apiConstraint.successAfterAdded)
                } else {
                    setInitialStatus(apiConstraint.failureAfterAdded)
                }
            } catch (e) {
                
            }
        }
    }

    const getPopUpFormData = (e) => {
        e.preventDefault()
    }

    const loaderContainer = () => (
        < div className="loader-container" data-testid="loader" >
            <ThreeDots color="#00BFFF" height={35} width={35} />
        </div >
    )

    const callNormalStatus = () => {
        getAreasMastersData()
    }

    const AfterAddedItemSuccessfullyContainer = () => (
        <div className="AfterAddedItemSuccessfullyContainer-container">
            <div className='icon-with-span'>
                <span className="afterAddingIcon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span className="afterAddingSpan">ADDED SUCCESSFULLY.</span>
            </div>
            <button className='define-bus-stops-of-new-students-buttons btn btn-primary mt-3' type='button' onClick={callNormalStatus}>OK</button>
        </div >
    )

    const AfterAddedItemFailureContainer = () => (
        <div className="AfterAddedItemSuccessfullyContainer-container">
            <div className='icon-with-span'>
                <span className="afterAddingFailureIcon">
                    <FontAwesomeIcon icon={faCircleXmark} />
                </span>
                <span className="afterAddingSpan">FAILED TO ADD.</span>
            </div>
            <div>
                <button className='define-bus-stops-of-new-students-buttons btn btn-primary mt-3' type='button' onClick={callNormalStatus}>OK</button>
            </div>
        </div >
    )

    const contentContainer = () => (
        <div className='define-vehicles-for-new-students-bg-container'>
            <h1 className='define-vehicles-for-new-students-main-heading mb-0'>AREAS MASTER</h1>
            <div className='container-fluid pt-2'>
                <div className='row'>
                    <div className='col-xs-12 mb-3 define-vehicles-for-new-students-table-container'>
                        <table className="define-vehicles-for-new-students-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>VEHICLE TYPE</th>
                                    <th>VEHICLE NO</th>
                                    <th>AREA CODE</th>
                                    <th>AREA[STOP] NAME</th>
                                    <th>KILOMETERS</th>
                                    <th>FARE-RS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getSchoolData.map((eachItem, key) => (
                                    <tr key={key}>
                                        <td>{eachItem.id}</td>
                                        <td>
                                            <select className='td-select' defaultValue={eachItem.vehicleType}>
                                                <option>BUS-1</option>
                                                <option>BUS-2</option>
                                                <option>BUS-3</option>
                                                <option>BUS-4</option>
                                                <option>VAN-1</option>
                                                <option>VAN-2</option>
                                                <option>VAN-3</option>
                                                <option>VAN-4</option>
                                            </select>
                                        </td>
                                        <td>{(eachItem.vehicleType === "BUS-1") && "TS08UF2268"} {(eachItem.vehicleType === "BUS-2") && "AP28TA5436"} {(eachItem.vehicleType === "BUS-3") && "AP28TA3447"} {(eachItem.vehicleType === "BUS-4") && "AP28TA3447"}</td>
                                        <td>{eachItem.areaCode}</td>
                                        <td>{eachItem.areaName}</td>
                                        <td>{eachItem.kilometers}</td>
                                        <td>{eachItem.totalFee}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className='define-vehicles-for-new-students-buttons-container pt-4 pb-4'>
                    <div>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-primary' type='button' onClick={handleAddPopUpShow}>ADD</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-secondary' type='submit'>EDIT</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-danger' type='button'>DELETE</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-info' type='button'>HELP</button>
                    </div>
                </div>
            </div>
        </div>
    )

    const failureContainer = () => (
        <div className='failure-view-container'>
            <>
                <button className='btn btn-primary retry-button' type='button' onClick={getAreasMastersData}>RETRY</button>
                <h1 className="failureHeading">Oops! Something Went Wrong</h1>
            </>
        </div>
    )

    const renderCards = () => {
        switch (getInitialStatus) {
            case apiConstraint.success:
                return contentContainer()
            case apiConstraint.successAfterAdded:
                return AfterAddedItemSuccessfullyContainer()
            case apiConstraint.failureAfterAdded:
                return AfterAddedItemFailureContainer()
            case apiConstraint.loading:
                return loaderContainer()
            case apiConstraint.failure:
                return failureContainer()
            default:
                return null
        }
    }

    return (
        <>
            {renderCards()}
            <Modal className='add-pop-up-modal-container' show={showAddPopUp} onHide={handleAddPopUpClose}>
                <form className='add-pop-up-modal-form' onSubmit={getPopUpFormData}>
                    <Modal.Header closeButton>
                        <Modal.Title className='pop-up-define-vehicles-for-new-students-main-heading'>ADD NEW AREAS MASTER</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='mb-2'>
                            <label className='pop-up-define-vehicles-for-new-students-label mb-1'>VEHICLE TYPE</label><br />
                            <select className='pop-up-define-vehicles-for-new-students-input-filed' defaultValue="BUS-1" onChange={(event) => setVehicleType(event.target.value)}>
                                <option value="BUS-1">BUS-1</option>
                                <option value="BUS-2">BUS-2</option>
                                <option value="BUS-3">BUS-3</option>
                                <option value="BUS-4">BUS-4</option>
                                <option value="VAN-1">VAN-1</option>
                                <option value="VAN-2">VAN-2</option>
                                <option value="VAN-3">VAN-3</option>
                                <option value="VAN-4">VAN-4</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label className='pop-up-define-vehicles-for-new-students-label mb-1'>AREA [STOP] NAME</label><br />
                            <input type='text' className='pop-up-define-vehicles-for-new-students-input-filed' required onChange={(event) => setAreaName(event.target.value)} />
                        </div>
                        <div className='mb-2'>
                            <label className='pop-up-define-vehicles-for-new-students-label mb-1'>KILOMETERS</label><br />
                            <input type='text' className='pop-up-define-vehicles-for-new-students-input-filed' onChange={(event) => setKilometers(event.target.value)} />
                        </div>
                        <div className='mb-2'>
                            <label className='pop-up-define-vehicles-for-new-students-label mb-1'>FARE-RS</label><br />
                            <input type='text' className='pop-up-define-vehicles-for-new-students-input-filed' onChange={(event) => setFareFee(event.target.value)} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type='submit' className='define-bus-stops-of-new-students-buttons' onClick={addButton}>
                            SAVE
                        </Button>
                        <Button variant="danger" className='define-bus-stops-of-new-students-buttons' onClick={handleAddPopUpClose}>
                            CANCEL
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default DefineVehiclesForNewStudents;
