import React from "react";
import { Link } from "react-router-dom";

import ButtonIcon from "../components/ButtonIcon";
import InputText from "../components/InputText";

function Login() {
    return (
      <div className="GS-verticalContent GS-centerItems">
        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none">
          <path d="M125 20.8334C67.4703 20.8334 20.8333 67.4704 20.8333 125C20.8333 182.529 67.4703 229.167 125 229.167C182.529 229.167 229.167 182.529 229.167 125C229.167 67.4704 182.529 20.8334 125 20.8334Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M44.4896 191.101C44.4896 191.101 67.7085 161.458 125 161.458C182.292 161.458 205.511 191.101 205.511 191.101" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M125 125C142.259 125 156.25 111.009 156.25 93.75C156.25 76.4911 142.259 62.5 125 62.5C107.741 62.5 93.75 76.4911 93.75 93.75C93.75 111.009 107.741 125 125 125Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <InputText 
          titulo={"Usuario"}
        />
        <InputText 
          titulo={"Contraseña"}/>
        <div className="">
            <Link to="/Healthnow/build/mainpage"> 
              <ButtonIcon 
                iconoDerecha={"Adelante"}
                texto={"Ingresar"} 
                color={"verde1"}  
              />
                
            </Link>
        </div>
      </div>
    );
  }

export default Login
