import React, { useState, useEffect } from "react";

import "../styles/pages/generalstyles.css"
import "../styles/components/Prescription/stylesheet.css"


function Prescription({type, title, porcion, description}){
    const iconMap = {
        'Jarabe': 'Jarabe2',    
        'Pastillas': 'Pastilla3',
        'Jeringa': 'Jeringa1'
    };

    return (
    <div className="GS-horizontalContent PS-layout ">
        <div className="GS-centerItems">
            <img
                className="PS-icon"
              src={require(`../icons/${iconMap[type]}.ico`)} 
              alt='Icono Izquierdo de receta' 
            />
        </div>
        <div>
            <div className="PS-title">{title}</div>
            <div className="PS-presc">{porcion}</div>
            <div className="PS-desc">{description}</div>
        </div>
    </div>
    )
}

export default Prescription