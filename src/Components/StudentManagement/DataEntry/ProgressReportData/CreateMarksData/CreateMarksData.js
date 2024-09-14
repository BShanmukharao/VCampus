import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateMarksData.css'

function CreateMarksData() {

    return (
        <div className='create-marks-data-bg-container'>
            <form className='create-marks-data-form-bg-container'>
                <h1 className='create-marks-data-main-heading mb-0'>CREATE MARKS DATA</h1>
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
                            <label className='input-label'>SELECT</label><br />
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
                            <span className='input-label'>SECTION</span>
                            <select defaultValue="A" className="input-filed">
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>ALL SECTIONS ?</span><br />
                            <input type='checkbox' className="checkbox-class" />
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

export default CreateMarksData;

