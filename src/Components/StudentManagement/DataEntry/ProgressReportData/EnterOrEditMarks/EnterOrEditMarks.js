import 'bootstrap/dist/css/bootstrap.min.css';
import './EnterOrEditMarks.css'

function EnterOrEditMarks() {

    return (
        <div className='enter-or-edit-marks-bg-container'>
            <form className='enter-or-edit-marks-form-bg-container'>
                <h1 className='enter-or-edit-marks-main-heading mb-0'>MARKS ENTRY INPUTS</h1>
                <div className='container-fluid pt-2'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <label className='input-label'>CLASS</label><br />
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
                            <span className='input-label'>SECTION</span>
                            <select defaultValue="A" className="input-filed">
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <label className='input-label'>TEST / EXAM</label><br />
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
                            <label className='input-label'>DATA TYPE</label><br />
                            <select className="input-filed" defaultValue="CURRENT DATA">
                                <option value="CURRENT DATA">CURRENT DATA</option>
                                <option value="CENTRAL DATA">CENTRAL DATA</option>
                                <option value="FINAL RESULT">FINAL RESULT</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <label className='input-label'>SUBJECT</label><br />
                            <select className="input-filed" defaultValue="ALL SUBJECTS">
                                <option value="ALL SUBJECTS">ALL SUBJECTS</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>ORDER</span><br />
                            <input type='radio' id="EOEMRNO" name="EOEM" className="radio-button-class" checked />
                            <label htmlFor="EOEMRNO" className="radio-button-label">ROLL NO</label>
                            <input type='radio' id="EOEMENO" name="EOEM" className="radio-button-class" />
                            <label htmlFor="EOEMENO" className="radio-button-label">ADMN NO</label>
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

export default EnterOrEditMarks;

