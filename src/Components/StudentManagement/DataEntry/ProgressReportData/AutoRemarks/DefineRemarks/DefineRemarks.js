import 'bootstrap/dist/css/bootstrap.min.css';
import './DefineRemarks.css'

function DefineRemarks() {
    return (
        <div className='define-remarks-bg-container'>
            <h1 className='define-remarks-main-heading mb-0'>TEACHERS REMARKS</h1>
            <div className='container-fluid pt-2'>
                <div className='row'>
                    <div className='col-xs-12 define-remarks-table-container mb-3'>
                        <table className="define-remarks-table">
                            <tr>
                                <th>CODE</th>
                                <th>REMARKS MADE BY TEACHERS / PRINCIPLE IN TESTS / EXAMS</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>STUDIES</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CONDUCT</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='define-remarks-buttons-container pt-4 pb-4'>
                    <div>
                        <button className='define-remarks-buttons btn btn-primary' type='button'>ADD</button>
                        <button className='define-remarks-buttons btn btn-secondary' type='submit'>EDIT</button>
                        <button className='define-remarks-buttons btn btn-danger' type='button'>DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefineRemarks;