import 'bootstrap/dist/css/bootstrap.min.css';
import './DefineRemarksGroup.css'

function DefineRemarksGroup() {
    return (
        <div className='define-remarks-group-stops-of-new-students-bg-container'>
            <h1 className='define-bus-stops-of-new-students-main-heading mb-0'>AUTO REMARKS GROUPS</h1>
            <div className='container-fluid pt-2'>
                <div className='row'>
                    <div className='col-xs-12 define-bus-stops-of-new-students-table-container mb-3'>
                        <table className="define-bus-stops-of-new-students-table">
                            <tr>
                                <th>CODE</th>
                                <th>REMARK GROUP</th>
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
                <div className='define-bus-stops-of-new-students-buttons-container pt-4 pb-4'>
                    <div>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-primary' type='button'>ADD</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-secondary' type='submit'>EDIT</button>
                        <button className='define-bus-stops-of-new-students-buttons btn btn-danger' type='button'>DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefineRemarksGroup;