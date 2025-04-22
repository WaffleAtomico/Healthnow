import React from "react";

import { Link } from "react-router-dom";
import ButtonIcon from "../components/ButtonIcon";

import "../styles/pages/generalstyles.css"


function StartPage(){
    return (
        <div className="GS-verticalContent ">
            <div className="GS-verticalContent">
                <div >
                    <img />
                </div>
                <div>
                    HealthNow
                </div>
            </div>
            <div className="GS-verticalContent">
                <Link to="/Healthnow/build/login"> 
                    <ButtonIcon 
                        texto={"Iniciar sesión"}
                        iconoIzquierda={"Feliz"}
                    />
                </Link >
                <Link to="/Healthnow/build/signup">
                    <ButtonIcon 
                        texto={"Crear cuenta"}
                        iconoIzquierda={"Perfil"}
                    />
                </Link>
            </div>
        </div>
    )
}

export default StartPage