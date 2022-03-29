import React from 'react';
import Main from './pages/Main';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


const App:React.FC = () => {
  return (
    <div>
    <Router>
     <Routes>
      <Route path="/" element={ <Main/>} />
      <Route path="/createAccount" element={<CreateAccount/>} />
      <Route path="/login" element={<Login/>}>
      </Route>
     </Routes>
    </Router>
     
     
  
    </div>
  )
}

export default App;
