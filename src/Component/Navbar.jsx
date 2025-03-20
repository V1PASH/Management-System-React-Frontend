import { NavLink, useNavigate } from "react-router-dom";
import '../Css/NavBar.css'
import {useState} from "react";

function NavBar({setLoggedIn}){
    const navigate = useNavigate();

    const logOut=()=>
    {
        sessionStorage.removeItem('isLoggedIn');
        setLoggedIn(false);
        navigate("/");   
    }

    const [open, isOpen] = useState(false);
    return(
        <>
            <nav className="w-full bg-black py-[10px] md:flex justify-center text-white h-fit md:h-[70px]  sm:block">
                <span className="w-[20%] text-center content-center ">
                    <img src="/src/assets/logo.png" alt=""  className="invert h-[20px] md:h-[100%] m-auto"/>
                </span>
                <span className="w-[30%] content-center">
                    <input type="text"  className="w-[100%] rounded-3xl text-zinc-200 bg-zinc-700 h-[70%] px-4 focus-visible:outline-0" placeholder="Search"/>
                </span>

                {/*pc*/}
                <ul className="w-[40%] list-none justify-around items-center text-[18px]  hidden md:flex">
                    <li>
                        <NavLink to='/Home' className={({isActive})=>(isActive?"text-red-600":"")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/account' className={({isActive})=>(isActive?"text-red-600":"")}>Account</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" className={({isActive})=>(isActive?"text-red-600":"")}>Settings</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive})=>(isActive?"text-red-600":"")}>About</NavLink>
                    </li>
                    <li>
                    </li>
                </ul>
                <span className="w-[10%] text-center content-center hidden md:block">
                    <button onClick={logOut} className="bg-red-600 text-white py-[10px] px-[20px] rounded-xl cursor-pointer ">Logout</button>
                </span>

            {/*    mobile */}

                <span className="block md:hidden">
                    <button onClick={()=>isOpen(!open)} className="">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </span>
                <ul className={open?"w-[40%] list-none items-center text-[18px]":"hidden"}>
                    <li>
                        <NavLink to='/Home' className={({isActive})=>(isActive?"text-red-600":"")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/account' className={({isActive})=>(isActive?"text-red-600":"")}>Account</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" className={({isActive})=>(isActive?"text-red-600":"")}>Settings</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive})=>(isActive?"text-red-600":"")}>About</NavLink>
                    </li>
                    <li>
                    <span className="w-[10%] text-center content-center ">
                        <button onClick={logOut} className="bg-red-600 text-white py-[10px] px-[20px] rounded-xl cursor-pointer ">Logout</button>
                    </span>
                    </li>
                </ul>


            </nav>
        </>
    )
}
export default NavBar