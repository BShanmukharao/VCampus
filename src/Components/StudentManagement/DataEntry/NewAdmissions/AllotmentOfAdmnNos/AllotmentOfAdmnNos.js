import 'bootstrap/dist/css/bootstrap.min.css';
import './AllotmentOfAdmnNos.css'

function AllotmentOfAdmnNos () {
    return (
        <div className='allotment-admn-form-bg-container'>
            <h1 className='allotment-admn-main-heading mb-0'>NEW ADMIN. NO.9</h1>
            <div className='container-fluid pt-2'>
                <div className='row'>
                    <div className='col-xs-12 mb-3'>
                        <span className='allotment-span'>COMMON LAST ADMN. NO. ISSUED</span>
                        <hr />
                        <p className="allotment-paragraph">Enter last Admn.No. common for all Classes to:</p>
                    </div>
                    <div className='col-xs-12 mb-3'>
                        <span className='allotment-span'>ADMN. NOs. TO ALLOT FURTHER</span>
                        <hr />
                        <p className="allotment-paragraph">Enter Nurserv to U.K.G Classes Admn.No. to allot:</p>
                        <p className="allotment-paragraph">Enter 1st to 10th Classes Admn.No. to allot from:</p>
                    </div>
                    <div className='col-xs-12 mb-3'>
                        <span className='allotment-span'>ADMN. NOs. TO ALLOT FURTHER</span>
                        <hr />
                        <span className="allotment-paragraph">Enter Nurserv to U.K.G Classes Admn.No. to allot:</span><input type="text" className="allotment-input mb-2" /><br />
                        <span className="allotment-paragraph">Enter 1st to 5th Classes Admn.No. to allot from:</span><input type="text" className="allotment-input mb-2" /><br />
                        <span className="allotment-paragraph">Enter 6st to 10th Classes Admn.No. to allot from:</span><input type="text" className="allotment-input" /><br />
                    </div>
                </div>
                <div className='allotment-buttons-container pt-4 pb-4'>
                    <div>
                        <button className='allotment-buttons btn btn-primary' type='button'>AUTO GET</button>
                        <button className='allotment-buttons btn btn-success' type='submit'>OK</button>
                        <button className='allotment-buttons btn btn-danger' type='button'>CANCEL</button>
                        <button className='allotment-buttons btn btn-secondary' type='button'>HELP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllotmentOfAdmnNos;