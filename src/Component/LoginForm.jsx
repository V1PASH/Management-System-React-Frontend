import { useState } from "react";

function LoginForm({Authenticate}){
   const [username,setUserName]=useState('');
   const[password,setPassword]=useState('');

   const usernameChange=((event)=>setUserName(event.target.value))
   const passwordChange=((event)=>setPassword(event.target.value))

   const handleLogin = (event) => {
         event.preventDefault();
         if(username==="Arsh" && password==="Arsh0922")
         {   
            Authenticate(true);
            sessionStorage.setItem("isLoggedIn", "true"); 
         }
         else{
            alert("Wrong Username Or password")
         }
    };

   


    return(
        <>
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
         </div>
        </>
    )
}

export default LoginForm