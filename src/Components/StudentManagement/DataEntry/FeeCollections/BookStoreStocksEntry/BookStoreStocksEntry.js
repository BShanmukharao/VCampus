import React, { /*useState*/ } from 'react';
import { useEffect, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookStoreStocksEntry.css'

function BookStoreStocksEntry() {

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
                <h1 className='application-registration-main-heading mb-0'>RECORD PURCHASE</h1>
                <div className='container-fluid container-with-button pt-2 pb-3'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>TODAY DATE</label><br />
                            <input type='text' className="input-filed" value={getTodayData} onChange={() => { }} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>MODE</label><br />
                            <input type='text' className="input-filed" value="CREATE" />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>OUR P.O NO</label><br />
                            <input type='text' value="0" className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Action is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>OUR P.O DATE</label><br />
                            <input type='text' value="--" className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Action is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>OUR P.O REF NO</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Action is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>PARTY INVOICE NO</label><br />
                            <input type='text' className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Date of birth is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>PARTY INVOICE DATE</label><br />
                            <input type='text' value="--" className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Father name is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>TOTAL</label><br />
                            <input type='text' value="0.00" className="input-filed" required onInvalid={(e) => (e.target.setCustomValidity('Mother name is required'))} onInput={(e) => (e.target.setCustomValidity(''))} />
                        </div>
                    </div>
                </div>
            </form>
            <div className='define-bus-stops-of-new-students-bg-container mt-4'>
                <h1 className='define-bus-stops-of-new-students-main-heading mb-0'>RECORD PURCHASE TABLE</h1>
                <div className='container-fluid pt-2'>
                    <div className='row'>
                        <div className='col-xs-12 define-bus-stops-of-new-students-table-container mb-3'>
                            <table className="define-bus-stops-of-new-students-table">
                                <tr>
                                    <th>ITEM CODE</th>
                                    <th>ITEM DESCRIPTION</th>
                                    <th>QUANTITY</th>
                                    <th>ITEM RATE</th>
                                    <th>AMOUNT RS</th>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td></td>
                                    <td>0</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                </tr>
                                <tfoot>
                                    <th></th>
                                    <th></th>
                                    <th>0</th>
                                    <th></th>
                                    <th>0.00</th>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div className='define-bus-stops-of-new-students-buttons-container pt-4 pb-4'>
                        <div>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-primary' type='button'>ADD INV</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-secondary' type='submit'>EDIT INV</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-danger' type='button'>DEL INV</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-success' type='button'>SAVE INV</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-info' type='button'>ADD ITEM</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-success' type='button'>DEL INV</button>
                            <button className='define-bus-stops-of-new-students-buttons btn btn-info' type='button'>ADD MASTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookStoreStocksEntry;

