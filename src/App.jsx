import './App.css';
import LoginForm from './Component/LoginForm';
import { useState ,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Component/Navbar';
import Account from './Pages/Account';
import Settings from './Pages/Settings';
import About from './Pages/About';
import Home from './Pages/Home';
import Page404 from './Pages/PageNotFound';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(() => {
    return sessionStorage.getItem("isLoggedIn") === "true"; 
  });
  
  useEffect(() => {
    sessionStorage.setItem("isLoggedIn", isLoggedIn?"true":"false");
  }, [isLoggedIn]);

  const [user,setUser]  =useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" />:<LoginForm Authenticate={setLoggedIn} setUser={setUser} />} />
        <Route path="/home" element={isLoggedIn ? <><NavBar setLoggedIn={setLoggedIn}/><Home user={user}/></> : <Navigate to="/"/>}/>
        <Route path="/account" element={isLoggedIn?<><NavBar setLoggedIn={setLoggedIn}/><Account/></>:<Navigate to="/"/>}/>
        <Route path="/settings" element={isLoggedIn?<><NavBar setLoggedIn={setLoggedIn}/><Settings/></>:<Navigate to="/"/>}/>
        <Route path="/about" element={isLoggedIn?<><NavBar setLoggedIn={setLoggedIn}/><About/></>:<Navigate to="/"/>}/>
        <Route path='/*' element={<><Page404/></>}/>
      </Routes>
    </Router>
  );
}

export default App;