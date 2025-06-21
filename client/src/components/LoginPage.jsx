
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(){

  const navigate = useNavigate()

  return(
    <div className="absolute inset-x-0 top-0 bg-lime-100">
      <h1 className="text-black text-[90px] font-bold text-center"> 
          Hello!
      </h1>
      <br/>
      <div className="h-screen flex justify-center" 
      onError={() => console.log("Login failed")}
      auto_select={true}/>
    </div>
  )
}

export default LoginPage;