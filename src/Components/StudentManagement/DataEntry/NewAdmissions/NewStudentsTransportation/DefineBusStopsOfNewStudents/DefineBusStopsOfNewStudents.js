import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import { ThreeDots, TailSpin/*,Puff, Rings, Oval, Bars, Circles, Header, Grid*/ } from 'react-loader-spinner';
import './DefineBusStopsOfNewStudents.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faTrash, faPen, faSync } from '@fortawesome/free-solid-svg-icons';


const apiConstraint = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    loading: 'LOADING',
    failure: 'FAILURE',

    successAfterAdded: 'SUCCESSAFTERADDED',
    failureAfterAdded: 'FAILUREAFTERADDED',

    successAfterUpdated: 'SUCCESSEAFTERUPDATED',
    failureAfterUpdated: 'FAILUREAFTERUPDATED',

    successAfterDelete: 'SUCCESSAFTERDELETE',
    failureAfterDelete: 'FAILUREAFTERDELETE',
}

function DefineVehiclesForNewStudents() {

    const [showAddPopUp, setshowAddPopUp] = useState(false);
    const [showUpdatePopUp, setshowUpdatePopUp] = useState(false);
    const [getVehicleType, setVehicleType] = useState("BUS-1");
    const [getAreaName, setAreaName] = useState("");
    const [getKilometers, setKilometers] = useState(0);
    const [getFareFee, setFareFee] = useState(0);

    const [getVehicletype, setVehicletype] = useState("")
    const [getAreaname, setAreaname] = useState("")
    const [getkilometers, setkilometers] = useState("")
    const [getFarers, setFarers] = useState("")
    const [getIsDataSaved, setIsDataSaved] = useState()

    const handleAddPopUpClose = () => setshowAddPopUp(false);
    const handleAddPopUpShow = () => setshowAddPopUp(true);
    const handleUpdatePopUpClose = () => setshowUpdatePopUp(false);
    const handleUpdatePopUpShow = () => setshowUpdatePopUp(true);


    const [getSchoolData, setSchoolData] = useState([]);
    const [getFilteredData, setFilteredData] = useState();
    const [getInitialStatus, setInitialStatus] = useState(apiConstraint.initial);

    useEffect(() => {
        getAreasMastersData()
    }, [])

    const setUpdatedData = (data) => {
        handleUpdatePopUpShow();
        setIsDataSaved(data)
        setVehicletype(data.vehicleType)
        setAreaname(data.areaName)
        setkilometers(data.kilometers)
        setFarers(data.fareRs)
        console.log(getIsDataSaved)
    }

    const setUserEnteredDataToState = (event) => {
        const userEnteredData = event.target.value
        const filteredData = getSchoolData.filter(item =>
            item.id.toString().toLowerCase().includes(userEnteredData.toLowerCase()) ||
            item.vehicleType.toString().toLowerCase().includes(userEnteredData.toLowerCase()) ||
            item.areaCode.toString().toLowerCase().includes(userEnteredData.toLowerCase()) ||
            item.areaName.toString().toLowerCase().includes(userEnteredData.toLowerCase()) ||
            item.kilometers.toString().toLowerCase().includes(userEnteredData.toLowerCase()) ||
            item.totalFee.toString().toLowerCase().includes(userEnteredData.toLowerCase())
        );
        setFilteredData(filteredData)
    }

    //
    const getAreasMastersData = async () => {
        setInitialStatus(apiConstraint.loading)

        //'/API/api/VCSync/PostListArea_Mas'
        //"proxy": "https://visualcampus.in",
        //https://cors-anywhere.herokuapp.com/https://visualcampus.in/API/api/VCSync/PostListArea_Mas

        try {
            const Data = await fetch('https://cors-anywhere.herokuapp.com/https://visualcampus.in/API/api/VCSync/PostListArea_Mas', {
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
            setFilteredData(updatedList)
            setInitialStatus(apiConstraint.success);
        } catch (e) {
            setInitialStatus(apiConstraint.failure);
        }
    }
    
    //
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
                    "Action": "INSERT"
                }
            ]

            handleAddPopUpClose()

            try {
                setInitialStatus(apiConstraint.loading)
                const addedData = await fetch('https://cors-anywhere.herokuapp.com/https://visualcampus.in/API/api/VCSync/PostArea_Mas', {
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

    //
    const updateButton = async () => {
        const data = getIsDataSaved
        console.log(data)
        handleUpdatePopUpClose()
        const updatedData = [{
            "ID": data.id,
            "vehcl_code": data.vehicleCode,
            "vehcl_type": getVehicletype,
            "area_code": data.areaCode,
            "area": getAreaname,
            "kilometers": getkilometers,
            "fare": data.fareRs,
            "fare_1": data.fareOne,
            "fare_2": data.fareTwo,
            "fare_3": data.fareThree,
            "fare_4": data.fareFour,
            "fare_5": data.fareFive,
            "fare_6": data.fareSix,
            "fare_7": data.fareSeven,
            "fare_8": data.fareEigth,
            "fare_9": data.fareNine,
            "fare_10": data.fareTen,
            "fare_11": data.fareEleven,
            "fare_12": data.fareTwelve,
            "total_fee": getFarers,
            "uploaded": data.isUploaded,
            "updated_on": data.updatedDate,
            "Key": "ASCTEST",
            "Action": "UPDATE"
        }]
        try {
            setInitialStatus(apiConstraint.loading)
            const deleteRow = await fetch('https://cors-anywhere.herokuapp.com/https://visualcampus.in/API/api/VCSync/PostUpdateAREAMAS', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData)
            })
            if (deleteRow.ok === true) {
                setInitialStatus(apiConstraint.successAfterUpdated)
            } else {
                setInitialStatus(apiConstraint.failureAfterUpdated)
            }
        } catch (e) {

        }
    }
    
    //
    const deleteRow = async (data) => {
        const updatedData = [{
            "ID": data.id,
            "vehcl_code": data.vehicleCode,
            "vehcl_type": data.vehicleType,
            "area_code": data.areaCode,
            "area": data.areaName,
            "kilometers": data.kilometers,
            "fare": data.fareRs,
            "fare_1": data.fareOne,
            "fare_2": data.fareTwo,
            "fare_3": data.fareThree,
            "fare_4": data.fareFour,
            "fare_5": data.fareFive,
            "fare_6": data.fareSix,
            "fare_7": data.fareSeven,
            "fare_8": data.fareEigth,
            "fare_9": data.fareNine,
            "fare_10": data.fareTen,
            "fare_11": data.fareEleven,
            "fare_12": data.fareTwelve,
            "total_fee": data.totalFee,
            "uploaded": data.isUploaded,
            "updated_on": data.updatedDate,
            "Key": "ASCTEST",
            "Action": "DELETE"
        }]

        try {
            setInitialStatus(apiConstraint.loading)
            const deleteRow = await fetch('https://cors-anywhere.herokuapp.com/https://visualcampus.in/API/api/VCSync/PostUpdateAREAMAS', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData)
            })
            if (deleteRow.ok === true) {
                setInitialStatus(apiConstraint.successAfterDelete)
            } else {
                setInitialStatus(apiConstraint.failureAfterDelete)
            }
        } catch (e) {

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

    const AfterUpdateItemSuccessfullyContainer = () => (
        <div className="AfterAddedItemSuccessfullyContainer-container">
            <div className='icon-with-span'>
                <span className="afterAddingIcon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span className="afterAddingSpan">UPDATED SUCCESSFULLY.</span>
            </div>
            <button className='define-bus-stops-of-new-students-buttons btn btn-primary mt-3' type='button' onClick={callNormalStatus}>OK</button>
        </div >
    )

    const AfterUpdateItemFailureContainer = () => (
        <div className="AfterAddedItemSuccessfullyContainer-container">
            <div className='icon-with-span'>
                <span className="afterAddingFailureIcon">
                    <FontAwesomeIcon icon={faCircleXmark} />
                </span>
                <span className="afterAddingSpan">FAILED TO UPDATE.</span>
            </div>
            <div>
                <button className='define-bus-stops-of-new-students-buttons btn btn-primary mt-3' type='button' onClick={callNormalStatus}>OK</button>
            </div>
        </div >
    )

    const AfterDeleteItemSuccessfullyContainer = () => (
        <div className="AfterAddedItemSuccessfullyContainer-container">
            <div className='icon-with-span'>
                <span className="afterAddingIcon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span className="afterAddingSpan">DELETED SUCCESSFULLY.</span>
            </div>
            <button className='define-bus-stops-of-new-students-buttons btn btn-primary mt-3' type='button' onClick={callNormalStatus}>OK</button>
        </div >
    )

    const AfterDeleteItemFailureContainer = () => (
        <div className="AfterAddedItemSuccessfullyContainer-container">
            <div className='icon-with-span'>
                <span className="afterAddingFailureIcon">
                    <FontAwesomeIcon icon={faCircleXmark} />
                </span>
                <span className="afterAddingSpan">FAILED TO DELETE.</span>
            </div>
            <div>
                <button className='define-bus-stops-of-new-students-buttons btn btn-primary mt-3' type='button' onClick={callNormalStatus}>OK</button>
            </div>
        </div >
    )

    /*
    {
                (getFilteredData.length) === 0 && (
                    <div className='no-data-found-container'>
                        <h1 className='no-data-found-heading'>No data was founded</h1>
                    </div>
                )
            }
    */

    const contentContainer = () => (
        <>
            <div className='search-input-container'>
                <input type='search' placeholder="Search here..." className='search-input' onChange={setUserEnteredDataToState} />
            </div>
            <div className='define-vehicles-for-new-students-bg-container'>
                <h1 className='define-vehicles-for-new-students-main-heading mb-0'>AREAS MASTER</h1>
                <div className='container-fluid pt-2'>
                    <div className='row'>
                        <div className='col-xs-12 mb-3 define-vehicles-for-new-students-table-container'>
                            <table className="define-vehicles-for-new-students-table">
                                <thead>
                                    <tr>
                                        <th>VEHICLE TYPE</th>
                                        <th>VEHICLE NO</th>
                                        <th>AREA CODE</th>
                                        <th>AREA[STOP] NAME</th>
                                        <th>KILOMETERS</th>
                                        <th>FARE-RS</th>
                                        <th style={{ textAlign: "center" }}>UPDATE</th>
                                        <th style={{ textAlign: "center" }}>DELETE</th>
                                    </tr>
                                </thead>
                                {(getFilteredData.length) > 0 && (<tbody>
                                    {getFilteredData.map((eachItem, key) => (
                                        <tr key={key}>
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
                                            <td>{(eachItem.vehicleType === "BUS-1") && "TS08UF2268"} {(eachItem.vehicleType === "BUS-2") && "AP28TA5436"} {(eachItem.vehicleType === "BUS-3") && "AP28TA3447"} {(eachItem.vehicleType === "BUS-4") && "AP28TA3447"} {(eachItem.vehicleType === "VAN-1") && "TS08UF2268"} {(eachItem.vehicleType === "VAN-2") && "AP28TA5436"} {(eachItem.vehicleType === "VAN-3") && "AP28TA3447"} {(eachItem.vehicleType === "VAN-4") && "AP28TA3447"}</td>
                                            <td>{eachItem.areaCode}</td>
                                            <td>{eachItem.areaName}</td>
                                            <td>{eachItem.kilometers}</td>
                                            <td>{eachItem.totalFee}</td>
                                            <td style={{ textAlign: "center" }} onClick={() => setUpdatedData(eachItem)}><FontAwesomeIcon icon={faPen} style={{ cursor: "pointer" }} /></td>
                                            <td style={{ textAlign: "center" }} onClick={() => deleteRow(eachItem)}><FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} /></td>
                                        </tr>
                                    ))}
                                </tbody>)}
                                <tfoot>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div className='define-vehicles-for-new-students-buttons-container pt-4 pb-4'>
                        <div>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-primary' type='button' onClick={handleAddPopUpShow}>ADD</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-danger' type='button'>HELP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
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
            case apiConstraint.loading:
                return loaderContainer()
            case apiConstraint.failure:
                return failureContainer()
            case apiConstraint.successAfterAdded:
                return AfterAddedItemSuccessfullyContainer()
            case apiConstraint.failureAfterAdded:
                return AfterAddedItemFailureContainer()
            case apiConstraint.successAfterUpdated:
                return AfterUpdateItemSuccessfullyContainer()
            case apiConstraint.failureAfterUpdated:
                return AfterUpdateItemFailureContainer()
            case apiConstraint.successAfterDelete:
                return AfterDeleteItemSuccessfullyContainer()
            case apiConstraint.failureAfterDelete:
                return AfterDeleteItemFailureContainer()
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
            <Modal className='add-pop-up-modal-container' show={showUpdatePopUp} onHide={handleUpdatePopUpClose}>
                <form className='add-pop-up-modal-form' onSubmit={getPopUpFormData}>
                    <Modal.Header closeButton>
                        <Modal.Title className='pop-up-define-vehicles-for-new-students-main-heading'>UPDATE AREAS MASTER</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='mb-2'>
                            <label className='pop-up-define-vehicles-for-new-students-label mb-1'>VEHICLE TYPE</label><br />
                            <select className='pop-up-define-vehicles-for-new-students-input-filed' defaultValue={getVehicletype} onChange={(event) => setVehicletype(event.target.value)}>
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
                            <input type='text' className='pop-up-define-vehicles-for-new-students-input-filed' onChange={(event) => setAreaname(event.target.value)} defaultValue={getAreaname} />
                        </div>
                        <div className='mb-2'>
                            <label className='pop-up-define-vehicles-for-new-students-label mb-1'>KILOMETERS</label><br />
                            <input type='text' className='pop-up-define-vehicles-for-new-students-input-filed' onChange={(event) => setkilometers(event.target.value)} defaultValue={getkilometers} />
                        </div>
                        <div className='mb-2'>
                            <label className='pop-up-define-vehicles-for-new-students-label mb-1'>FARE-RS</label><br />
                            <input type='text' className='pop-up-define-vehicles-for-new-students-input-filed' onChange={(event) => setFarers(event.target.value)} defaultValue={getFarers} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type='submit' className='define-bus-stops-of-new-students-buttons' onClick={updateButton}>
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

export default DefineVehiclesForNewStudents;
