import './SideBarJquery'
import $ from "jquery"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { toggleValue } from '../Redux/ToggleSideBarSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faUsers, faUserTie, faFileInvoice, faBook, faHourglassStart, faCommentDots, faXmark } from '@fortawesome/free-solid-svg-icons';



export const SideBar = () => {

  const dispatch = useDispatch()

  return (
    <div className='bg-container' id='SideBar-Id'>
      <div className='sidebar' id="side-id">
        <div className='head'>
          <div>
            <Link to="/home" className='logout-router-link'>
              <img src="https://c8.alamy.com/comp/2E1AKBG/initial-circle-vc-letter-logo-creative-typography-vector-template-creative-letter-vc-logo-vector-2E1AKBG.jpg" alt='logo' className='sidebar-logo' />
            </Link>
          </div>
          <div className='user-details'>
            <Link to="/home" className='logout-router-link'>
              <p className='title'>Visual Campus</p>
            </Link>
          </div>
          <FontAwesomeIcon icon={faXmark} className='close-sidebar-arrow' id="close-sidebar-id" onClick={() => dispatch(toggleValue())} />
        </div>
        <div className='nav'>
          <div className='menu'>
            <ul>
              <li>
                <Link to={""}>
                  <FontAwesomeIcon icon={faUsers} className='icon' />
                  <span className='text'>Students Management</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </Link>
                <ul className='first-nested-menu'>
                  <li>
                    <Link to={""}>
                      <span className='text'>Data Entry</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </Link>
                    <ul className='second-nested-menu'>
                      <li>
                        <Link to={""}>
                          <span className='text'>New Admissions</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </Link>
                        <ul className='third-nested-menu'>
                          <li>
                            <span className='text'><Link to={"/home/ApplicationRegistrationFee"} className='each-link'>Application / Registration Fee</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={""} className='each-link'>New Students Monthly / Term Fee</Link></span>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>View Sold Application / Registrations</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Registrations List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>New Admission Master Data</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>View New Admissions Master</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>New Students Transaction</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Define Vehicles for New Students</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Define Bus Stops of New Students</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Un-Select New Student</span>
                            </a>
                          </li>
                          <li>
                            <span className='text'><Link to={"/home/AllotmentOfAdmnNos"} className='each-link'>Allotment of Admn.Nos</Link></span>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Miscellaneous Fee Collection</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>General Uniforms Fee Collection</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Books Fee of New Students</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Students Master</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Regular Student's Master Data</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>view Regular Students Master Data</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>View Old Students Master Data</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>T.C / D.C Entry</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Detain Students</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Export Photo to Folder</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Progress Reports Date</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Create Marks Data</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Enter / Edit Marks</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Delete Marks Data</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Recreate Marks Data</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Back-Up Marks Data</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Update Performances</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>View / Update C.M.R</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Subject-wise Faculties</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Class Faculties List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Auto Remarks</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Define Remarks Groups</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Define Remarks</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Define Auto Remarks</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Exempt all Absents</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Convert marks to Grades</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Change Subject Properties</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Fee Collections</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>School Fee Collections</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Miscellaneous Fee Collection</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Uniform Stocks Entry</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Updated Uniforms Items Stocks Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>General Uniforms Fee Collection</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Book Store Stocks Entry</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Updated Book Store Stocks Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Books Fee Collection</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Edit Current Year Fee Opening Dues</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Current Year fee Opening Dues List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Left Students Fee Dues Entry</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Left Students Fee Dues List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Fee Groups</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Transfer / Delete / Change Data of Fee</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Daily Absentees Enter</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Absentees - Register Format</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Absentees - Screen Format</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Absentees - Graphical Format</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Daily Late Comers Enter</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Late Comers - Register Format</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Late Comers - Screen Format</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Late Comers - Graphical Format</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Daily Homework Recording</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Daily Homework Entry</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Homework Keywords</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Generate Homework Report</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Monthly Attendance</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Working Days</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Transportation</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Vehicles</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Bus Stops</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Timetable Management</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Section-wise No.of Periods</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Class-wise Subjects / Faculties</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Faculty-wise Timetable</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Section-wise Weekly Timetable</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Table View Timetable</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Tree View Timetable</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Greetings</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Types</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Greetings</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Create Greetings</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Certificates</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Types</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Certificates</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Create Certificates</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Bondified Cum Study Certificate</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Bondified Cum Conduct Certificate</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Transfer Certificate / Record Sheet</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>School Calender</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Prepare New Diary</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Record Academic Events</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>View Academic Events</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Holidays Calender</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Create New Holidays</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Edit Holidays</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Reports</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>New Admissions Reports</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Application / Registration Fee Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Print Registrations List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>New Admissions Fee Registers</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>New Admissions Fee Receipts Register</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Fee R.R.B List</span>
                                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                                </a>
                                <ul className='fifth-nested-menu'>
                                  <li>
                                    <a href='#'>
                                      <span className='text'>Individual Card</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href='#'>
                                      <span className='text'>Class-wise R.R.B List</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>New Admissions Fee Dues List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>New Admissions Fee Structure</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Transport Fee Structure</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Merit Students List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Selected Students List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Intimation Letters</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Class Entry List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>New Admissions Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Admission Forms</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>New Students Photos List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Summary of Admissions</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>New Admissions Statistics</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Language-wise Summary</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Miscellaneous Fee Collections Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>General Uniform Fee Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Daily Books Fee Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Books Fee Dues / R.R.B</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Item-wise Stock Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>List of Store Items Groups</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>List of Items in Store</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>List of Class-wise Book Sets</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Class-wise Books Taken Students List</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Students Who Took Books</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Students Who Have not Taken Books</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>List of Items to Re-Order</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Transport Areas List</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Students Masters Lists</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Admission Register</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Complete Register</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Class-wise Register</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Check for Duplicates</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Admission No. Duplicates</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Roll No. Duplicates</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Class Section-wise Students lists</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Roll No. wise List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Admn. No. wise List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Name-wise List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Roll No. wise List With Mother Name</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Caste-wise List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Sub-Caste wise List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Religion-wise List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Mother Tongues List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>1st and 2nd Language-wise List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Missing 1st and 2nd Language List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>New Admissions List-1</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Admn.No wise New Students List-2</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Fee Group-wise Student List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Kin and Kith lists</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>House List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Phone No.s List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Aadhaar No.s List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Students Photos List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Students P.E No.s List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Identification Marks List</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Students Lists</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Excluded Students List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Re-Admitted Students List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Address Labels List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>ID / Library Cards</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>List of Addresses of Students</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Full Concession List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Concessions Availed Student</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Students Ages</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Age Groups</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Above 18 Yrs Age Students</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Birthdays List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Student Physical Info Reports</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>E C A Reports</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Certificates Deposited</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>School Strength</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Detailed Strength Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Summary of Strength Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>School Strength Statistics</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Transportation List</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Areas List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Vehicles List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Area-wise Students List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Vehicle-wise Students List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Section-wise List</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Hall Ticket</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Reports Check List</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Marks Entry Blank List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Marks Check List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Remarks Code Blank List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Remarks Code Check List</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Progress Reports</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Graphical</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Plain Reports</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Scholostic Record</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Final Result Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Patch Graphic</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Check All Data</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Academic Performance Reports</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Performance Abstract</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Class-wise Ranks List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Toppers List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Honours List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Failed List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Subject Average</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Subject-wise Precentage of Marks</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>List of Marks in %</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Remedial Students List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>C.M.R Check List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Centeral Marks Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Final Result Register</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Academic Performance Graphs</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Class-wise Performance</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Subject-wise Performance</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Teacher-wise Performance</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Student-wise Performance</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Auto Remarks</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Short Remarks</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Long Remarks</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Fee Registers etc</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>School Fee Receipts Register (D.F.C.R)</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Edited Fee Receipts Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Deleted Fee Receipts Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Non-Ascending Fee Receipt Non. / Receipt Dates</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Non-Ascending Fee Receipt Dates Register</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Non-Ascending Fee Receipt No.s Register</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>List Students Fee D.F.C.R</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Miscellaneous Fee Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>General Uniform Fee Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Book Fee Registers</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Daily Books Fee Report</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Books Fee Dues / R.R.B</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Item-wise Stock Register</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>List of Store Items Groups</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>List of Items Groups</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>List of Class-wise Book Sets</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Class-wise Students List</span>
                                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                                </a>
                                <ul className='fifth-nested-menu'>
                                  <li>
                                    <a href='#'>
                                      <span className='text'>Students Who Bought Books</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href='#'>
                                      <span className='text'>Students who Have Not Bought Books</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>List of Items to Re-Order</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>All Fee Types D.F.C.Rs</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Transaction No-wise D.F.C.Rs</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Monthly Fee Registers</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Monthly Registers</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Specific Period</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Term Registers</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Fee Received List</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Data Head-wise Fee Received Lists</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>All Fee Heads</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Full Fee Received Lists</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Fee Unreceived Lists</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Received Less Than a Specific Amount</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Fee Received Before / After due Dates</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Fee Received Other Than in Cash</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Reconcle Fee Cheques Clearance</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Fines / Concessions</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Month / Term-wise Fines List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Total concessions Granted And Availed List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Month / Term-wise concessions Availed List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Month / Term-wise concessions Reversed</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Regular Fee R.R.B lists</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Individual Card</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Class-wise R.R.B List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Summary Report</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Regular Fee Dues lists</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Detailed Dues List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Summary of Dues List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Fee Due Slip</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>No Fee Due Slips</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Fee Dues Memos</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Permitted Students List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Excess Fee Received From Students</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Fee Defaulters List</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Transport Fee Received</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Transport Fee R.R.B Lists</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Transport Individual Card</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Transport R.R.B List</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Transport Fee Dues</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Left Students Fee Dues List</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>School Fee Structure</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Transport Fee Structure</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Today's S.M.S Sent Reports</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Report / Letter Writer</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Report Writer</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Letter Writer</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Greetings / Certificate</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Bondified-Cum-Study Certificate</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Bondified-Cum-Conduct Certificate</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Transfer Certificate / Record Sheet</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Attendance Register</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Blank Attendance Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Attendance Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Monthly Absentees Register</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Check List</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Blank Form</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Daily Absentees Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Daily Late Comers Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Daily Absentees Reminder</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Daily Late Comers Reminder</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>General Attendance Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Attendance Precentagess</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Attendance Memos</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Working Days List</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Generate Homework Report</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Academic Events Report</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Print Holidays Calender</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Print Holidays List</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>General Holidays</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Fixed Holidays</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Optional Holidays</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>All Holidays</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Miscellaneous Report</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Enquiry</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Find Student</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Find a Regular Student</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Find a Old Student</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>SMS Balance</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Super User Settings</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>New Admission Settings</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>New Admission Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Set New Fee Structure</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>New Application Fee</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>New Registrations Fee</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>New Fee Months</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>New Fee Structure</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>New Admission Selection Criteria</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Export New Admissions</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Prepare New Data Files</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Branches Management</span>

                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Select Branch</span>

                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Students Master Settings</span>

                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>General Settings</span>

                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Fee Heads</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Fee Months</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>School Fee Months</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Fee Structure</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>School Fee Structure</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Fee Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Receipt Nos Control</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Fee Collection Modes</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Fee Table</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>User Charges Table</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Branch Codes</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Uniform Heads</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>General Uniform Fee Structure</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Define Uniform Fee Receipt No.(s)</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Miscellaneous Fee Heads</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Miscellaneous Fee Receipt No.(s)</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Store Item Groups</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Store Items</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Book Sets</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Set Rules for Books Fee</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Books Fee Receipt No</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Subject etc</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Subjects</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Sections</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Categories</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Religions</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Castes</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Sub-Castes</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Mother Tongues</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Medium(s)</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Occupations</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Set Houses</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define syllabus</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define States</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Maths / Science</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Classes</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Create / Modify Classes</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Set Subjects for Each class</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Maximun Classes</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Maximun Subjects</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Classes List</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Define Exams</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Remarks / Grade</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Define OverAll Grades</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define OverAll Remarks</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Honours</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Subject Grades</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Subject Ranks to Grades</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define GPA Remarks</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Skill Grades</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Exam Details</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Attendance</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Fine Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Define Fines Table</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Fill Attendance %</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Attendance Remarks</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Master Archive</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Master to Archive</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Archive to Master</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Renumber Roll Nos</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Global Changes</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Hall Ticket Codes</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Fee Due Codes</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Subject-wise Data / Time</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Academic Year</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Academic Year</span>

                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Year End Process</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Financial Year</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Fee to Accounts</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>-Wise Fee Dues</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Back-up Financial Year</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Academic Year</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Promote Regular Students</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Promote Re-Exam Students</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Detain Settings</span>

                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Last Admn Nos</span>

                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Date to Check Age</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={""}>
                  <FontAwesomeIcon icon={faUserTie} className='icon' />
                  <span className='text'>Employees Management</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </Link>
                <ul className='first-nested-menu'>
                  <li>
                    <a href='#'>
                      <span className='text'>Data Entry</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Employees Master</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Cumulative I P R</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Employees Loans Master</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>L.I.C Policies Master</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Attendance Recording</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Monthly Attendance</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>View Month-Wise Attendance</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Employees Banks</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Process</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Process Payroll</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Update Loans Master File</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Update Cumulative Master</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Reports</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Cash List</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Bank List</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Employee Playslips</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Payroll Reports</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Attendance Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Current Month Attendance Register</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Salary Statement</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <a href='#'>
                                  <span className='text'>Current Month </span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Previous Months</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>L.I.C Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>E.P.F Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>P.F Return Form-3A</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>P.F Return Form-6A</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>E.S.I Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Profession Tax Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Profession Tax Return</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Income Tax Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Other Earnings / Deductions Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>MSc. Earnings / Deductions Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Loss of Pay Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Leaves Encashment Report</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Employee Loans</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Payroll Journal Voucher (J.V)</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Address Labels</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Cumulative Payroll</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Gratuity / Leave Encashment Report</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Salary Certificate</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Employees' Master List</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Carry-over Rs. Current Month List</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Carry-over Rs. Cumulative List</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Employees Strength Report</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Employees Leaves Report</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Employees Leaves Balance Report</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Employees Absents Rate Report</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Enquiry</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Super User Settings</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Payroll Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Attendance Rules</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Profession Tax Table</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Define Pay Groups</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Define Service Types</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Define Pay Categories</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Define Salutations</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Net Salary Rounds Off</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Payroll A/C Heads</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Payroll to Accounts</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={""}>
                  <FontAwesomeIcon icon={faFileInvoice} className='icon' />
                  <span className='text'>Accounts Management</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </Link>
                <ul className='first-nested-menu'>
                  <li>
                    <a href='#'>
                      <span className='text'>Data Entry</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Receipt Vouchers</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Payment Vouchers</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Journal Vouchers</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Opening Balances</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Change Branches</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Chart of Accounts</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Party's Masters</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Party-wise O.Bs</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Manage Groups / Sub-Groups</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Manage Branches</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Manage Bank Accounts</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Bank(s) Reconciliation</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Voucher Diagnostics</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a>
                              <span className='text'>Verify Vouchers</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className='text'>Verify Branches</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className='text'>Generate Vouchers Header</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className='text'>Verify Missing G.L Codes</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Budget in Chart of Accounts</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Accounting Year</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Reports</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Transaction Check Lists</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Print Receipt Vouchers</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Print Payment Vouchers</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Journal Book</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Opening Balances</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Cash Flow Statement</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Daily Cash Book</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Cash Book</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Daily Bank Book</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Bank Book</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>General Ledger</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>G.L Head-wise Receipts / Payments</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Party Sub-Ledgers</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Receipts and Payments</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a>
                              <span className='text'>Abridged Receipts And Payments A/C</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className='text'>Receipts And Payments Schedule</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className='text'>Detailed Receipts And Payments A/C</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Incom and Expenditure</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a>
                              <span className='text'>Abridged Income And Expenditure A/C</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className='text'>Income And Expenditure Schedule</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className='text'>Detailed Income And Expenditure A/C</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Trail Balance</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Balance Sheet</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a>
                              <span className='text'>Abridged Balance Sheet</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className='text'>Balance Sheet Schedule</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className='text'>Detailed Balance Sheet</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Chart of Accounts</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Letters to Parties</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Bank Reconciliation Statement (BRS)</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Budget Performance Report</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Drill Down</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Receipts and Payments</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Income and Expenditure</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Balance Sheet</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Super User Settings</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Cash / Banks Summary Only in General Ledger</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Back-Up Transactions</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Restore Back-Up Transactions</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Renumber Voucher Nos</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Calculator</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Calender</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Default Chart of Accounts</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Enable Accounts Export to Tally.ERP 9</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Import Today's Income Receipts Into Accounts</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Year End</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Back-Up Financial Year</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Transfer C.Bs to O.Bs</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Prepare New Date Files</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={""}>
                  <FontAwesomeIcon icon={faHourglassStart} className='icon' />
                  <span className='text'>Fixed Assets Management</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </Link>
                <ul className='first-nested-menu'>
                  <li>
                    <a href='#'>
                      <span className='text'>Data Entry</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Define Asset Groups / Sub-Groups</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Manage Asset Items</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Depreciation Method</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a>
                              <span className='text'>Straight Line Method (SLM)</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className='text'>Reducing Balance Method (RBM / MDV)</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Depreciation Mode</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a>
                              <span className='text'>Calculate For Days</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className='text'>Calculate For Months</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Depreciation Precentages</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Capital Expenditure Budget</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Fixed Assets Masters</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Acquistion Modes</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Present Conditions</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Location Master</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Vendors Master</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Map Fixed Asset Settings To Accounts</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Generate Depreciation J.V</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Reports</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Fixed Assets Tree</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                            <a href='#'>
                              <span className='text'>Graphical Mode</span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Statement Mode</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>This Year Additions</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>This Year Deletions</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Live Items List</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Fixed Assets Schedule</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Fixed Assets Labels</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Fixed Assets Rates</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Capital Expenditure Budget</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Budget Performance Report</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Print Fixed Asset Tags</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Enquiry</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={""}>
                  <FontAwesomeIcon icon={faBook} className='icon' />
                  <span className='text'>Library Management</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </Link>
                <ul className='first-nested-menu'>
                  <li>
                    <a href='#'>
                      <span className='text'>Data Entry</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Library Branches</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Classifications Master</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Define Subjects</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Categories of Members</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Racks / Cupboards</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Publishers Master</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Authors Master</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Members Master</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Define Library Items</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Issue of Library Items</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Define Condition of Items</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Define Members / Items in Que</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Receipt of Library Items</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Record the Library Items to Procure</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Record Fines for Delayed Returns</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Reports</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Classification-wise Items List</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Subject-wise Items List</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>List of Member Catories</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>List of Publisher-wise Items</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>List of Authore-wise Items</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>List of Rack-wise Items</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>List of Items Issued</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>List of Items Received</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>List of Items in Que</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Chart of Subjects</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>List of Budgetted Items</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>List of Soiled Items</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Enquiry</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Depreciation</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Calculate Depreciation</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Super User Settings</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Maximun No. of Items to Issue</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Maximun No. Days to Hold</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={""}>
                  <FontAwesomeIcon icon={faCommentDots} className='icon' />
                  <span className='text'>Utilities</span>
                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                </Link>
                <ul className='first-nested-menu'>
                  <li>
                    <a href='#'>
                      <span className='text'>Set Always On Top</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Set Application Idle Time</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Set Dot Matries Printer Timeout</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Output Files Management</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Review Folder</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Define Review Notes - Calender</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Browse Review Notes</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Automatic Review Mode</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>List the Review Notes</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Tree Notes</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Users Management</span>
                      <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                    </a>
                    <ul className='second-nested-menu'>
                      <li>
                        <a href='#'>
                          <span className='text'>Manage Users</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Alot Rights</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Re-Alot Rights</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Backup-Restore</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Upload Backup File</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Upload Data to Cloud Server for Mobile Apps</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Upload with Latest VisualCampus</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>USB Drive Manager</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Web Camera</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>SMS World</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>eMail World</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Photo ID Cards</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Calculator</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Calender</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Windows Run Dialog</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Windows world Pad</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>MS World</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>MS Excel</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Draw Signature</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Show Tips</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Clean Database</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Refresh Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>PDF Review</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Select Menus for Shortcuts</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='text'>Configure Institute</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

