import React from "react";

import { Link } from "react-router-dom";
import ButtonIcon from "../components/ButtonIcon";

import "../styles/pages/generalstyles.css"
import "../styles/pages/StartPage/stylesheet.css"

function StartPage(){
    return (
        <div className="GS-verticalContent ">
            <div className="GS-verticalContent GS-centerItems">
                <div >
                    <img className="SP-logo"
                        style={{height: "auto"}}
                        src={require("../icons/LogoHealthNow.ico")}
                        alt='Logotipo de HealthNow' 
                    />
                </div>
                <h1 style={{color: "#164245", fontSize: "4rem", marginBottom: "0rem"}}>HealthNow</h1>
            </div>
            <div className="GS-verticalContent">
                <Link to="/Healthnow/build/login"> 
                    <ButtonIcon 
                        texto={"Iniciar sesión"}
                        iconoIzquierda={"Feliz"}
                        width={"13"}
                        color={"azul2"}
                    />
                </Link >
                <Link to="/Healthnow/build/signup">
                    <ButtonIcon 
                        texto={"Crear cuenta"}
                        iconoIzquierda={"Perfil"}
                        width={"13"}
                    />
                </Link>
                
            </div>
        </div>
    )
}

export default StartPage