import React from "react";

import "../styles/components/FooterNavbar/StyleSheet.css"

function FooterNavbar(props){ 

    return(
        <div className="FN_layout FN_style">
            {props.iconsNames.map((module, index)=> (
                <div 
                    className="FN_icon"
                    key={index}
                    onClick={()=>props.handleOptionSelected(index)}>
                <img
                    className='FN_icon_layout'
                    src={require(`../icons/${module}.ico`)} 
                    alt='Icono Derecho del boton'
                />
                </div>
            ))}
        </div>
    )
}

export default FooterNavbar