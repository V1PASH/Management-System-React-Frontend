import './App.css';
import Index from './Pages';
import LoginForm from './Component/LoginForm';
import { useState ,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Component/Navbar';
import Account from './Pages/Account';
import Settings from './Pages/Settings';
import About from './Pages/About';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(() => {
    return sessionStorage.getItem("isLoggedIn") === "true"; 
  });
  useEffect(() => {
    sessionStorage.setItem("isLoggedIn", isLoggedIn?"true":"false");
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/index" /> : <LoginForm Authenticate={setLoggedIn} />} />
        <Route path="/index" element={isLoggedIn ? <><NavBar setLoggedIn={setLoggedIn}/><Index /></> : <Navigate to="/"/>}/>
        <Route path="/account" element={isLoggedIn?<><NavBar setLoggedIn={setLoggedIn}/><Account/></>:<Navigate to="/"/>}/>
        <Route path="/settings" element={isLoggedIn?<><NavBar setLoggedIn={setLoggedIn}/><Settings/></>:<Navigate to="/"/>}/>
        <Route path="/about" element={isLoggedIn?<><NavBar setLoggedIn={setLoggedIn}/><About/></>:<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
}

export default App;