import { useNavigate } from "react-router-dom"

function Page404(){
    const Navigate=useNavigate();
    return(
        <>
            <div className="main text-center">
                <h1 className="text-red-500 text-[40px] font-bold">
                 Error 404
                </h1>
                <p className="text-[30px]">Sorry the page you are looking for is not found</p>
                <button onClick={()=>Navigate("/")} className="bg-blue-700 py-[10px] px-[20px] text-white rounded-lg mt-5">Go back to home page</button>
            </div>
        </>
    )
}

export default Page404