import React from "react";

import "../styles/components/HeaderGeneral/stylesheet.css"

function HeaderGeneral({icono, texto}) {
    return (
      <div className="HG_layout">
        <div >
            <img className="HG_icon"
              src={require(`../icons/${icono ? icono : "Corazon"}.ico`)} 
              alt='Icono de cabecera' 
              
            />
        </div>
        <div className="HG_text">
           <h1>{texto}</h1>
        </div>
      </div>
    );
  }

export default HeaderGeneral