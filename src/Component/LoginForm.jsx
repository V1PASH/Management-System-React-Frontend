import { useState } from "react";
import "../Css/LoginForm.css"

function LoginForm({Authenticate,setUser}){
   const [username,setUserName]=useState('');
   const[password,setPassword]=useState('');
   const [register,setRegister]=useState(false)

   const usernameChange=((event)=>setUserName(event.target.value))
   const passwordChange=((event)=>setPassword(event.target.value))

   const handleLogin = (event) => {
         event.preventDefault();
         if(username==="Arsh" && password==="Arsh0922")
         {   
            Authenticate(true);
            setUser(username);
            sessionStorage.setItem("isLoggedIn", "true"); 
         }
         else{
            alert("Wrong Username Or password")
         }
    };
   if (register){
    return (
        <>
            <div className="form-container ">
                <div className="side-panel content-center">
                    <img src="/src/assets/logo.png" className="invert mx-auto"/>
                </div>
                <div className="form">
                    <div className="shadow-2xl bg-white inset-shadow-2xs h-[600px] rounded-lg w-[400px] mx-auto py-[20px] flex flex-col items-center">
                        <p className="text-2xl font-bold text-regal-blue">Register</p>


                        <form className="my-[40px] w-[90%] flex flex-wrap" >
                            <button type="submit" className="bg-blue-700 w-full py-[10px] text-white rounded-xl hover:bg-blue-800 cursor-pointer">
                                Register
                            </button>
                        </form>
                        <button onClick={()=>setRegister(!register)} className="bg-blue-700 w-[20%] py-[10px] text-white rounded-xl hover:bg-blue-800 cursor-pointer">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
   }
   else{
    return(
        <>
            <div className="form-container">
                <div className="side-panel content-center">
                    <img src="/src/assets/logo.png" className="invert mx-auto"/>
                </div>
                <div className="form">
                    <div className="shadow-2xl bg-white inset-shadow-2xs h-[600px] rounded-lg w-[400px] mx-auto py-[20px] flex flex-col items-center">
                        <p className="text-2xl font-bold text-regal-blue">LOGIN</p>
                        <form className="my-[40px] w-[90%]" onSubmit={handleLogin}>
                            <label className="block mb-1 font-medium">Username</label>
                            <input className="border rounded-sm w-full h-[30px] px-2 mb-4" type="text" value={username}  onChange={usernameChange}required />
                            <label className="block mb-1 font-medium">Password</label>
                            <input className="border rounded-sm w-full h-[30px] px-2 mb-4" type="password" value={password}  onChange={passwordChange}  required/>
                            <button type="submit" className="bg-blue-700 w-full py-[10px] text-white rounded-xl hover:bg-blue-800 cursor-pointer">
                                LOGIN
                            </button>
                        </form>
                        <button onClick={()=>setRegister(!register)}>Register</button>
                    </div>
                </div>
            </div>
        </>
    )
   }
}

export default LoginForm