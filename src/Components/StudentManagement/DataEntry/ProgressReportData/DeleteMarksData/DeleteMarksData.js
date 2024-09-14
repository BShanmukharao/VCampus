import 'bootstrap/dist/css/bootstrap.min.css';
import './DeleteMarksData.css'

function DeleteMarksData() {

    return (
        <div className='delete-marks-data-bg-container'>
            <form className='delete-marks-data-form-bg-container'>
                <h1 className='delete-marks-data-main-heading mb-0'>DELETE MARKS DATA</h1>
                <div className='container-fluid pt-2'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <label className='input-label'>SELECT CLASS</label><br />
                            <select className="input-filed" defaultValue="NURSARY">
                                <option value="nursary">NURSARY</option>
                                <option value="L.K.G">L.K.G</option>
                                <option value="U.K.G">U.K.G</option>
                                <option value="class-1">CLASS-1</option>
                                <option value="class-2">CLASS-2</option>
                                <option value="class-3">CLASS-3</option>
                                <option value="class-4">CLASS-4</option>
                                <option value="class-5">CLASS-5</option>
                                <option value="class-6">CLASS-6</option>
                                <option value="class-7">CLASS-7</option>
                                <option value="class-8">CLASS-8</option>
                                <option value="class-9">CLASS-9</option>
                                <option value="class-10">CLASS-10</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <label className='input-label'>SELECT TEST / EXAM</label><br />
                            <select className="input-filed" defaultValue="FORMATIVE-1">
                                <option value="FORMATIVE-1">FORMATIVE-1</option>
                                <option value="FORMATIVE-2">FORMATIVE-2</option>
                                <option value="SUMMATIVE-1">SUMMATIVE-1</option>
                                <option value="FORMATIVE-3">FORMATIVE-3</option>
                                <option value="FORMATIVE-4">FORMATIVE-4</option>
                                <option value="SUMMATIVE-2">SUMMATIVE-2</option>
                                <option value="FINAL RESULT">FINAL RESULT</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <label className='input-label'>PRINT ON PROGRESS</label><br />
                            <input type="date" className="input-filed" />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <label className='input-label'>SELECT A TEMPLATE</label><br />
                            <select className="input-filed" defaultValue="TEMPLATE NO.1">
                                <option value="TEMPLATE NO.1">TEMPLATE NO.1</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <label className='input-label'>SELECT A THEME</label><br />
                            <select className="input-filed" defaultValue="THEME NO.1">
                                <option value="THEME NO.1">THEME NO.1</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>SECTION A SECTION</span>
                            <select defaultValue="A" className="input-filed">
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>ALL SECTIONS ?</span><br />
                            <input type='checkbox' className="checkbox-class" />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>DATE</span>
                            <div className="radio-with-label">
                                <input type='radio' id="DMDCUD" name="DMDCD" className="radio-button-class" />
                                <label htmlFor="DMDCUD" className="radio-button-label">CURRENT DATE</label>
                            </div>
                            <div className="radio-with-label">
                                <input type='radio' id="DMDCED" name="DMDCD" className="radio-button-class" />
                                <label htmlFor="DMDCED" className="radio-button-label">CENTRAL DATE</label>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>ORDER</span>
                            <div className="radio-with-label">
                                <input type='radio' id="DMDAL" name="DMDSS" className="radio-button-class" checked />
                                <label htmlFor="DMDAL" className="radio-button-label">ALL STUDENTS</label>
                            </div>
                            <div className="radio-with-label">
                                <input type='radio' id="DMDSS" name="DMDSS" className="radio-button-class" />
                                <label htmlFor="DMDSS" className="radio-button-label">SELECTED STUDENTS</label>
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

export default DeleteMarksData;

