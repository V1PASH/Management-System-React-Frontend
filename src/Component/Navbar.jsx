import { NavLink, useNavigate } from "react-router-dom";
import '../Css/NavBar.css'

function NavBar({setLoggedIn}){
    const navigate = useNavigate();
    const logOut=()=>
    {
        sessionStorage.removeItem('isLoggedIn');
        setLoggedIn(false);
        navigate("/");   
    }
    return(
        <>
            <nav className="w-full bg-black py-[10px] flex justify-center text-white">

            <span className="w-[30%] text-center content-center">
                ACCOUNT
            </span>

            <ul className="w-[50%] list-none flex justify-around items-center text-[18px]">
                <li>
                    <NavLink to='/index'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/account'>Account</NavLink>
                </li>
                <li>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>

            <span className="w-[20%] text-center content-center">
                <button onClick={logOut} className="bg-red-600 text-white py-[10px] px-[20px] rounded-xl cursor-pointer">Logout</button>
            </span>
            </nav>
        </>
    )
}
export default NavBar