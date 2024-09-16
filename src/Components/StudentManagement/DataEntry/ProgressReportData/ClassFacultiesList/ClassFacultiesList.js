import 'bootstrap/dist/css/bootstrap.min.css';
import './ClassFacultiesList.css'

function ClassFacultiesList() {

    return (
        <div className='class-faculties-list-bg-container'>
            <form className='class-faculties-list-form-bg-container'>
                <h1 className='class-faculties-list-main-heading mb-0'>FACULTYS LIST</h1>
                <div className='container-fluid pt-2'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>CLASS TO RECORD ABSENTEES ?</span><br />
                            <input type='checkbox' checked className="checkbox-class" />
                        </div>
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
                            <span className='input-label'>ALL SECTION ?</span><br />
                            <input type='checkbox' checked className="checkbox-class" />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>SECTION TO RECORD</span>
                            <select defaultValue="A" className="input-filed">
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mt-2'>
                            <span className='input-label'>SELECT ORDER TO RECORD</span>
                            <div className="radio-with-label">
                                <input type='radio' id="DMDAL" name="DMDSS" className="radio-button-class" checked />
                                <label htmlFor="DMDAL" className="radio-button-label">CLASS TEACHER</label>
                            </div>
                            <div className="radio-with-label">
                                <input type='radio' id="DMDSS" name="DMDSS" className="radio-button-class" />
                                <label htmlFor="DMDSS" className="radio-button-label">ALL TEACHERS</label>
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

export default ClassFacultiesList;

