import 'bootstrap/dist/css/bootstrap.min.css';
import './DefineAutoRemarks.css'

function DefineAutoRemarks() {
    return (
        <div className='define-auto-remarks-bg-container'>
            <h1 className='define-auto-remarks-main-heading mb-0'>TEACHERS AUTO REMARKS</h1>
            <div className='container-fluid pt-2'>
                <div className='row'>
                    <div className='col-xs-12 define-auto-remarks-table-container mb-3'>
                        <table className="define-remarks-table">
                            <tr>
                                <th>RANK FROM</th>
                                <th>RANK TO</th>
                                <th>WHEN PASSED-1</th>
                                <th>WHEN FAILED-1</th>
                                <th>WHEN PASSED-2</th>
                                <th>WHEN FAILED-2</th>
                                <th>WHEN PASSED-3</th>
                                <th>WHEN FAILED-3</th>
                                <th>WHEN PASSED-4</th>
                                <th>WHEN FAILED-4</th>
                                <th>PASS REMARK-5</th>
                                <th>WHEN FAILED-5</th>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>1</td>
                                <td>141</td>
                                <td>141</td>
                                <td>0</td>
                                <td>0</td>
                                <td>142</td>
                                <td>142</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>143</td>
                                <td>141</td>
                                <td>0</td>
                                <td>0</td>
                                <td>144</td>
                                <td>142</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>3</td>
                                <td>145</td>
                                <td>141</td>
                                <td>0</td>
                                <td>0</td>
                                <td>146</td>
                                <td>142</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>5</td>
                                <td>147</td>
                                <td>141</td>
                                <td>0</td>
                                <td>0</td>
                                <td>148</td>
                                <td>142</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>10</td>
                                <td>149</td>
                                <td>141</td>
                                <td>0</td>
                                <td>0</td>
                                <td>150</td>
                                <td>142</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>16</td>
                                <td>151</td>
                                <td>141</td>
                                <td>0</td>
                                <td>0</td>
                                <td>152</td>
                                <td>142</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>26</td>
                                <td>153</td>
                                <td>141</td>
                                <td>0</td>
                                <td>0</td>
                                <td>154</td>
                                <td>142</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>26</td>
                                <td>157</td>
                                <td>143</td>
                                <td>141</td>
                                <td>0</td>
                                <td>0</td>
                                <td>158</td>
                                <td>142</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>36</td>
                                <td>159</td>
                                <td>143</td>
                                <td>141</td>
                                <td>0</td>
                                <td>0</td>
                                <td>160</td>
                                <td>142</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='define-auto-remarks-buttons-container pt-4 pb-4'>
                    <div>
                        <button className='define-auto-remarks-buttons btn btn-primary' type='button'>ADD</button>
                        <button className='define-auto-remarks-buttons btn btn-secondary' type='submit'>EDIT</button>
                        <button className='define-auto-remarks-buttons btn btn-danger' type='button'>DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefineAutoRemarks;