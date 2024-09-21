import 'bootstrap/dist/css/bootstrap.min.css';
import './BonafideCumConductCertificate.css'

function BonafideCumConductCertificate() {

    return (
        <div className='bonafide-cum-study-certificate-bg-container'>
            <form className='bonafide-cum-study-certificate-form-bg-container'>
                <h1 className='bonafide-cum-study-certificate-main-heading mb-0'>CONDUCT CERTIFICATE</h1>
                <div className='container-fluid pt-2'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>MODE</span>
                            <div className="radio-with-label">
                                <input type='radio' id="SWDC" name="BFCSC" className="radio-button-class" checked />
                                <label htmlFor="SWDC" className="radio-button-label">CREARE</label>
                            </div>
                            <div className="radio-with-label">
                                <input type='radio' id="DDE" name="BFCSC" className="radio-button-class" />
                                <label htmlFor="DDE" className="radio-button-label">EDIT</label>
                            </div>
                            <div className="radio-with-label">
                                <input type='radio' id="DDEI" name="BFCSC" className="radio-button-class" />
                                <label htmlFor="DDEI" className="radio-button-label">DELETE</label>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>ALL CLASSES</label><br/>
                            <input type='checkbox' className='checkbox-class' />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <label className='input-label'>SELECT CLASS</label><br />
                            <select className="input-filed" defaultValue="NURSARY">
                                <option value="NURSARY1">NURSARY</option>
                                <option value="U.K.G">U.K.G</option>
                                <option value="L.K.G">L.K.G</option>
                                <option value="CLASS-1">CLASS-1</option>
                                <option value="CLASS-2">CLASS-2</option>
                                <option value="CLASS-3">CLASS-3</option>
                                <option value="CLASS-4">CLASS-4</option>
                                <option value="CLASS-5">CLASS-5</option>
                                <option value="CLASS-6">CLASS-6</option>
                                <option value="CLASS-7">CLASS-7</option>
                                <option value="CLASS-8">CLASS-8</option>
                                <option value="CLASS-9">CLASS-9</option>
                                <option value="CLASS-10">CLASS-10</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>ALL SECTION</label><br/>
                            <input type='checkbox' className='checkbox-class' />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <label className='input-label'>SELECT SECTION</label><br />
                            <select className="input-filed" defaultValue="A">
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>SELECT ORDER</span>
                            <div className="radio-with-label">
                                <input type='radio' id="SWUD" name="DCD" className="radio-button-class" />
                                <label htmlFor="SWUD" className="radio-button-label">ADMN NO</label>
                            </div>
                            <div className="radio-with-label">
                                <input type='radio' id="DDEDI" name="DCD" className="radio-button-class" />
                                <label htmlFor="DDEDI" className="radio-button-label">ROLL NO - WISE</label>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>SELECTED OR ALL STUDENTS ?</span>
                            <div className="radio-with-label">
                                <input type='radio' id="SWDC" name="MDC" className="radio-button-class" checked />
                                <label htmlFor="SWDC" className="radio-button-label">SELECTED</label>
                            </div>
                            <div className="radio-with-label">
                                <input type='radio' id="DDEI" name="MDC" className="radio-button-class" />
                                <label htmlFor="DDEI" className="radio-button-label">ALL STUDENTS</label>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>SELECT STATIONARY TYPE</span>
                            <div className="radio-with-label">
                                <input type='radio' id="SWDC" name="MDCD" className="radio-button-class" checked />
                                <label htmlFor="SWDC" className="radio-button-label">PRE-PRINTED</label>
                            </div>
                            <div className="radio-with-label">
                                <input type='radio' id="DDEI" name="MDCD" className="radio-button-class" />
                                <label htmlFor="DDEI" className="radio-button-label">PLAIN SHEETS</label>
                            </div>
                        </div>
                    </div>
                    <div className='buttons-container pt-4 pb-4'>
                        <button className='buttons btn btn-primary' type='button'>PROCEED</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BonafideCumConductCertificate;

