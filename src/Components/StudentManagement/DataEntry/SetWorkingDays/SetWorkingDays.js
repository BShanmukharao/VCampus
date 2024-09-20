import 'bootstrap/dist/css/bootstrap.min.css';
import './SetWorkingDays.css'

function SetWorkingDays() {

    return (
        <div className='set-working-days-bg-container'>
            <form className='set-working-days-form-bg-container'>
                <h1 className='set-working-days-main-heading mb-0'>WORKING DAYS</h1>
                <div className='container-fluid pt-2'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <label className='input-label'>SELECT TEXT / EXAM</label><br />
                            <select className="input-filed" defaultValue="FORMATIVE-1">
                                <option value="FORMATIVE-1">FORMATIVE-1</option>
                                <option value="FORMATIVE-2">FORMATIVE-2</option>
                                <option value="FORMATIVE-3">FORMATIVE-3</option>
                                <option value="FORMATIVE-4">FORMATIVE-4</option>
                                <option value="SUMMATIVE-1">SUMMATIVE-1</option>
                                <option value="SUMMATIVE-2">SUMMATIVE-2</option>
                                <option value="FINAL RESULT">FINAL RESULT</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>CREATION MODE</span>
                            <div className="radio-with-label">
                                <input type='radio' id="SWUD" name="DMDCD" className="radio-button-class"/>
                                <label htmlFor="SWUD" className="radio-button-label">MANUAL</label>
                            </div>
                            <div className="radio-with-label">
                                <input type='radio' id="DDEDI" name="DMDCD" className="radio-button-class" checked/>
                                <label htmlFor="DDEDI" className="radio-button-label">AUTO</label>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>CREATION MODE</span>
                            <div className="radio-with-label">
                                <input type='radio' id="SWDC" name="MDCD" className="radio-button-class" checked/>
                                <label htmlFor="SWDC" className="radio-button-label">EXAM-WISE</label>
                            </div>
                            <div className="radio-with-label">
                                <input type='radio' id="DDEI" name="MDCD" className="radio-button-class" />
                                <label htmlFor="DDEI" className="radio-button-label">ALL MONTH</label>
                            </div>
                        </div>
                    </div>
                    <div className='buttons-container pt-4 pb-4'>
                        <button className='buttons btn btn-primary' type='button'>OK</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SetWorkingDays;

