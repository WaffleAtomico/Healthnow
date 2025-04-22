import React from "react";

import "../styles/components/Searchbar/stylesheet.css"


function Searchbar(){
    return (
        <div className="SB-layout">
            <div >
                <img className="SB-icon"
                    src={require(`../icons/Buscar.ico`)} 
                    alt='Icono de barra de busqueda' 
                />
            </div>
            <div 
                className="SB-input-layout">
                <input 
                    className ="SB-input-style"
                     type="text" 
                />
            </div>
        </div>
    )
}



export default Searchbar