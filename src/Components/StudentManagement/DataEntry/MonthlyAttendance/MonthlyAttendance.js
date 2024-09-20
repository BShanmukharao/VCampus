import 'bootstrap/dist/css/bootstrap.min.css';
import './MonthlyAttendance.css'

function MonthlyAttendance() {

    return (
        <div className='monthly-attendance-bg-container'>
            <form className='monthly-attendance-form-bg-container'>
                <h1 className='monthly-attendance-main-heading mb-0'>ATTENDANCE REPORTS</h1>
                <div className='container-fluid pt-2'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <label className='input-label'>SELECT CLASS</label><br />
                            <select className="input-filed" defaultValue="ALL CLASSES">
                                <option value="nursary">ALL CLASSES</option>
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
                            <span className='input-label'>SECTION A SECTION</span>
                            <select className="input-filed">
                                <option value="A">ALL</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>DATE</span>
                            <div className="radio-with-label">
                                <input type='radio' id="MADCUD" name="DMDCD" className="radio-button-class" checked/>
                                <label htmlFor="MADCUD" className="radio-button-label">CHECK LIST</label>
                            </div>
                            <div className="radio-with-label">
                                <input type='radio' id="DDCED" name="DMDCD" className="radio-button-class" />
                                <label htmlFor="DDCED" className="radio-button-label">BLANK FORM</label>
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

export default MonthlyAttendance;

