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
                            <span className='text'><Link to={"/home/ApplicationRegistrationFee"} id="side-id" className='each-link'>Application / Registration Fee</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={""} id="side-id" className='each-link'>New Students Monthly / Term Fee</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={""} id="side-id" className='each-link'>View Sold Application / Registrations</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={""} id="side-id" className='each-link'>Registrations List</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={""} id="side-id" className='each-link'>New Admission Master Data</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={""} id="side-id" className='each-link'>View New Admissions Master</Link></span>
                          </li>
                          <li>
                            <Link to={""}>
                              <span className='text'>New Students Transaction</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </Link>
                            <ul className='forth-nested-menu'>
                              <li>
                                <span className='text'><Link to={"/home/DefineBusStopsOfNewStudents"} id="side-id" className='each-link'>Define Vehicles for New Students</Link></span>
                              </li>
                              <li>
                                <span className='text'><Link to={"/home/DefineVehiclesForNewStudents"} id="side-id" className='each-link'>Define Bus Stops of New Students</Link></span>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className='text'><Link to={""} id="side-id" className='each-link'>Un-Select New Student</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={"/home/AllotmentOfAdmnNos"} id="side-id" className='each-link'>Allotment of Admn.Nos</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={""} id="side-id" className='each-link'>Miscellaneous Fee Collection</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={""} id="side-id" className='each-link'>General Uniforms Fee Collection</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={"/home/BooksFeeofNewStudents"} id="side-id" className='each-link'>Books Fee of New Students</Link></span>
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Regular Student's Master Data</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>view Regular Students Master Data</Link></span>
                        
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>View Old Students Master Data</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>T.C / D.C Entry</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Detain Students</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Export Photo to Folder</Link></span>
                          
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
                            <span className='text'><Link to={"/home/CreateMarksData"} id="side-id" className='each-link'>Create Marks Data</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={"/home/EnterOrEditMarks"} id="side-id" className='each-link'>Enter / Edit Marks</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={"/home/DeleteMarksData"} id="side-id" className='each-link'>Delete Marks Data</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={"/home/RecreateMarksData"} id="side-id" className='each-link'>Recreate Marks Data</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={"/home/BackUpMarksData"} id="side-id" className='each-link'>Back-Up Marks Data</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Update Performances</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>View / Update C.M.R</Link></span>      
                          </li>
                          <li>
                            <span className='text'><Link to={"/home/SubjectWiseFaculties"} id="side-id" className='each-link'>Subject-wise Faculties</Link></span>
                          </li>
                          <li>
                            <span className='text'><Link to={"/home/ClassFacultiesList"} id="side-id" className='each-link'>Class Faculties List</Link></span>
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Auto Remarks</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                                <span className='text'><Link to={"/home/DefineRemarksGroup"} id="side-id" className='each-link'>Define Remarks Groups</Link></span>
                              </li>
                              <li>
                              <span className='text'><Link to={"/home/DefineRemarks"} id="side-id" className='each-link'>Define Remarks</Link></span>                                 
                              </li>
                              <li>
                              <span className='text'><Link to={"/home/DefineAutoRemarks"} id="side-id" className='each-link'>Define Auto Remarks</Link></span>
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Exempt all Absents</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Convert marks to Grades</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Change Subject Properties</Link></span>
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>School Fee Collections</Link></span>
                              
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Miscellaneous Fee Collection</Link></span>
                            
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Uniform Stocks Entry</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Updated Uniforms Items Stocks Register</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>General Uniforms Fee Collection</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Book Store Stocks Entry</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Updated Book Store Stocks Register</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Books Fee Collection</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Edit Current Year Fee Opening Dues</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Current Year fee Opening Dues List</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Left Students Fee Dues Entry</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Left Students Fee Dues List</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Fee Groups</Link></span>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Transfer / Delete / Change Data of Fee</Link></span>
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Absentees - Register Format</Link></span>
                              
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Absentees - Screen Format</Link></span>
                        
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Absentees - Graphical Format</Link></span>
                      
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Late Comers - Register Format</Link></span>
                      
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Late Comers - Screen Format</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Late Comers - Graphical Format</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Daily Homework Entry</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Homework Keywords</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Generate Homework Report</Link></span>
                          
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={"/home/MonthlyAttendance"} id="side-id" className='each-link'>Monthly Attendance</Link></span>
                     
                      </li>
                      <li>
                      <span className='text'><Link to={"/home/SetWorkingDays"} id="side-id" className='each-link'>Set Working Days</Link></span>   
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Transportation</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                          <span className='text'><Link to={"/home/DefineVehicles"} id="side-id" className='each-link'>Define Vehicles</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={"/home/DefineBusStops"} id="side-id" className='each-link'>Define Bus Stops</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Section-wise No.of Periods</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Class-wise Subjects / Faculties</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Faculty-wise Timetable</Link></span>
                          
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Section-wise Weekly Timetable</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Table View Timetable</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Tree View Timetable</Link></span>
                              
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
                          <span className='text'><Link to={"/home/DefineTypes"} id="side-id" className='each-link'>Define Types</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={"/home/DefineGreetings"} id="side-id" className='each-link'>Define Greetings</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={"/home/CreateGreetings"} id="side-id" className='each-link'>Create Greetings</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Types</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Certificates</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Create Certificates</Link></span>
                          
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Bondified Cum Study Certificate</Link></span>
                      
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Bondified Cum Conduct Certificate</Link></span>
                  
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Transfer Certificate / Record Sheet</Link></span>
                      
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>School Calender</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Prepare New Diary</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Record Academic Events</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>View Academic Events</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Create New Holidays</Link></span>
                      
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Edit Holidays</Link></span>
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Application / Registration Fee Report</Link></span>
                           
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Print Registrations List</Link></span>
                          
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>New Admissions Fee Registers</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>New Admissions Fee Receipts Register</Link></span>
                              
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Fee R.R.B List</span>
                                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                                </a>
                                <ul className='fifth-nested-menu'>
                                  <li>
                                  <span className='text'><Link to={""} id="side-id" className='each-link'>Individual Card</Link></span>
                                  
                                  </li>
                                  <li>
                                  <span className='text'><Link to={""} id="side-id" className='each-link'>Class-wise R.R.B List</Link></span>
                                  
                                  </li>
                                </ul>
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>New Admissions Fee Dues List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>New Admissions Fee Structure</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Transport Fee Structure</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Merit Students List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Selected Students List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Intimation Letters</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Class Entry List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>New Admissions Register</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Admission Forms</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>New Students Photos List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Summary of Admissions</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>New Admissions Statistics</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Language-wise Summary</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Miscellaneous Fee Collections Register</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>General Uniform Fee Register</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Daily Books Fee Register</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Books Fee Dues / R.R.B</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Item-wise Stock Register</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>List of Store Items Groups</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>List of Items in Store</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>List of Class-wise Book Sets</Link></span>
                          
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Class-wise Books Taken Students List</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Students Who Took Books</Link></span>
                             
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Students Who Have not Taken Books</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>List of Items to Re-Order</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Transport Areas List</Link></span>
                          
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
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Complete Register</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Class-wise Register</Link></span>
                              
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
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Admission No. Duplicates</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Roll No. Duplicates</Link></span>
                              
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
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Roll No. wise List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Admn. No. wise List</Link></span>
                            
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Name-wise List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Roll No. wise List With Mother Name</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Caste-wise List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Sub-Caste wise List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Religion-wise List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Mother Tongues List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>1st and 2nd Language-wise List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Missing 1st and 2nd Language List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>New Admissions List-1</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Admn.No wise New Students List-2</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Fee Group-wise Student List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Kin and Kith lists</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>House List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Phone No.s List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Aadhaar No.s List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Students Photos List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Students P.E No.s List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Identification Marks List</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Students Lists</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Excluded Students List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Re-Admitted Students List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Address Labels List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>ID / Library Cards</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>List of Addresses of Students</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Full Concession List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Concessions Availed Student</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Students Ages</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Age Groups</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Above 18 Yrs Age Students</Link></span>
                        
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Birthdays List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Student Physical Info Reports</Link></span>
                         
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>E C A Reports</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Certificates Deposited</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Detailed Strength Report</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Summary of Strength Report</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>School Strength Statistics</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Areas List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Vehicles List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Area-wise Students List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Vehicle-wise Students List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Section-wise List</Link></span>
                          
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Hall Ticket</Link></span>
                     
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Reports Check List</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Marks Entry Blank List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Marks Check List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Remarks Code Blank List</Link></span>
                        
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Remarks Code Check List</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Graphical</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Plain Reports</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Scholostic Record</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Final Result Report</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Patch Graphic</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Check All Data</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Performance Abstract</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Class-wise Ranks List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Toppers List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Honours List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Failed List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Subject Average</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Subject-wise Precentage of Marks</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>List of Marks in %</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Remedial Students List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>C.M.R Check List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Centeral Marks Register</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Final Result Register</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Class-wise Performance</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Subject-wise Performance</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Teacher-wise Performance</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Student-wise Performance</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Short Remarks</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Long Remarks</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>School Fee Receipts Register (D.F.C.R)</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Edited Fee Receipts Register</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Deleted Fee Receipts Register</Link></span>
                          
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Non-Ascending Fee Receipt Non. / Receipt Dates</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Non-Ascending Fee Receipt Dates Register</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Non-Ascending Fee Receipt No.s Register</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>List Students Fee D.F.C.R</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Miscellaneous Fee Register</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>General Uniform Fee Register</Link></span>
                          
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Book Fee Registers</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Daily Books Fee Report</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Books Fee Dues / R.R.B</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Item-wise Stock Register</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>List of Store Items Groups</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>List of Items Groups</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>List of Class-wise Book Sets</Link></span>
                              
                              </li>
                              <li>
                                <a href='#'>
                                  <span className='text'>Class-wise Students List</span>
                                  <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                                </a>
                                <ul className='fifth-nested-menu'>
                                  <li>
                                  <span className='text'><Link to={""} id="side-id" className='each-link'>Students Who Bought Books</Link></span>
                                  
                                  </li>
                                  <li>
                                  <span className='text'><Link to={""} id="side-id" className='each-link'>Students who Have Not Bought Books</Link></span>
                                  
                                  </li>
                                </ul>
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>List of Items to Re-Order</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>All Fee Types D.F.C.Rs</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Transaction No-wise D.F.C.Rs</Link></span>
                          
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Monthly Fee Registers</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Monthly Registers</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Specific Period</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Term Registers</Link></span>
                          
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Fee Received List</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Data Head-wise Fee Received Lists</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>All Fee Heads</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Full Fee Received Lists</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Fee Unreceived Lists</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Received Less Than a Specific Amount</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Fee Received Before / After due Dates</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Fee Received Other Than in Cash</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Reconcle Fee Cheques Clearance</Link></span>
                              
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
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Month / Term-wise Fines List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Total concessions Granted And Availed List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Month / Term-wise concessions Availed List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Month / Term-wise concessions Reversed</Link></span>
                              
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
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Individual Card</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Class-wise R.R.B List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Summary Report</Link></span>
                              
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
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Detailed Dues List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Summary of Dues List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Fee Due Slip</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>No Fee Due Slips</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Fee Dues Memos</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Permitted Students List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Excess Fee Received From Students</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Fee Defaulters List</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Transport Fee Received</Link></span>
                          
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Transport Fee R.R.B Lists</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Transport Individual Card</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Transport R.R.B List</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Transport Fee Dues</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Left Students Fee Dues List</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>School Fee Structure</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Transport Fee Structure</Link></span>
                          
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Today's S.M.S Sent Reports</Link></span>
                      
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Report / Letter Writer</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Report Writer</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Letter Writer</Link></span>
                          
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Greetings / Certificate</Link></span>
                      
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Bondified-Cum-Study Certificate</Link></span>
                      
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Bondified-Cum-Conduct Certificate</Link></span>
                      
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Transfer Certificate / Record Sheet</Link></span>
                      
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Attendance Register</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Blank Attendance Register</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Attendance Register</Link></span>
                          
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Monthly Absentees Register</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Check List</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Blank Form</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Daily Absentees Register</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Daily Late Comers Register</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Daily Absentees Reminder</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Daily Late Comers Reminder</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>General Attendance Register</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Attendance Precentagess</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Attendance Memos</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Working Days List</Link></span>
                          
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Generate Homework Report</Link></span>
                      
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Academic Events Report</Link></span>
                      
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Print Holidays Calender</Link></span>
                      
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Print Holidays List</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>General Holidays</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Fixed Holidays</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Optional Holidays</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>All Holidays</Link></span>
                          
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Miscellaneous Report</Link></span>
                      
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Find a Regular Student</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Find a Old Student</Link></span>
                          
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>SMS Balance</Link></span>
                      
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>New Admission Settings</Link></span>
                          
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Set New Fee Structure</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>New Application Fee</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>New Registrations Fee</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>New Fee Months</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>New Fee Structure</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>New Admission Selection Criteria</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Export New Admissions</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Prepare New Data Files</Link></span>
                          
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Branches Management</Link></span>
                      
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Select Branch</Link></span>
                      
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Students Master Settings</Link></span>
                      
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>General Settings</Link></span>
                      
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
                              <span className='text'><Link to={""} id="side-id" className='each-link'>School Fee Months</Link></span>
                              
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
                              <span className='text'><Link to={""} id="side-id" className='each-link'>School Fee Structure</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Fee Settings</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Receipt Nos Control</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Fee Collection Modes</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Fee Table</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>User Charges Table</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Branch Codes</Link></span>
                          
                          </li>
                          <li>
                            <a href='#'>
                              <span className='text'>Uniform Heads</span>
                              <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                            </a>
                            <ul className='forth-nested-menu'>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>General Uniform Fee Structure</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Define Uniform Fee Receipt No.(s)</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Miscellaneous Fee Heads</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Miscellaneous Fee Receipt No.(s)</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Store Item Groups</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Store Items</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Book Sets</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Set Rules for Books Fee</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Books Fee Receipt No</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Subjects</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Sections</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Categories</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Religions</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Castes</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Sub-Castes</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Mother Tongues</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Medium(s)</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Occupations</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Set Houses</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define syllabus</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define States</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Maths / Science</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Create / Modify Classes</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Set Subjects for Each class</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Maximun Classes</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Maximun Subjects</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Classes List</Link></span>
                          
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Define Exams</Link></span>
                      
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Remarks / Grade</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define OverAll Grades</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define OverAll Remarks</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Honours</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Subject Grades</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Subject Ranks to Grades</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define GPA Remarks</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Skill Grades</Link></span>
                          
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Set Exam Details</Link></span>
                      
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Set Attendance</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Fine Settings</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Define Fines Table</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Fill Attendance %</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Attendance Remarks</Link></span>
                          
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
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Master to Archive</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Archive to Master</Link></span>
                          
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Renumber Roll Nos</Link></span>
                      
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Global Changes</Link></span>
                      
                      </li>
                      <li>
                        <a href='#'>
                          <span className='text'>Hall Ticket Codes</span>
                          <FontAwesomeIcon icon={faCaretRight} className='arrow' />
                        </a>
                        <ul className='third-nested-menu'>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Fee Due Codes</Link></span>
                          
                          </li>
                          <li>
                          <span className='text'><Link to={""} id="side-id" className='each-link'>Subject-wise Data / Time</Link></span>
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
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Set Academic Year</Link></span>
                      
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
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Fee to Accounts</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>-Wise Fee Dues</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Back-up Financial Year</Link></span>
                              
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
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Promote Regular Students</Link></span>
                              
                              </li>
                              <li>
                              <span className='text'><Link to={""} id="side-id" className='each-link'>Promote Re-Exam Students</Link></span>
                              
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Detain Settings</Link></span>
                      
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Set Last Admn Nos</Link></span>
                      
                      </li>
                      <li>
                      <span className='text'><Link to={""} id="side-id" className='each-link'>Set Date to Check Age</Link></span>
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

