import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login/Login'
import { Home }  from './Components/Home/Home'

function App() {
  return (
    <div className='app-bg-container'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home/*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
