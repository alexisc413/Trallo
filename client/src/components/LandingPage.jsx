import React from 'react';
import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/Clouds.png';
import buttonImage from '../assets/logo.png';


function LandingPage(){
  const navigate = useNavigate();
  
  return (
    <div
      className="absolute inset-0"
      style={{ 
        backgroundImage: `url(${backgroundImage})`
      }}>
      <img
        src={buttonImage}
        onClick={() => navigate('/home-page')}
        className="absolute left-150 top-0 h-55 cursor-pointer transform hover:scale-105 transition duration-500"
      />
      <div className="h-screen flex justify-center" 
      onError={() => console.log("Login failed")}
      auto_select={true}/>

    </div>
  )
}

export default LandingPage;

