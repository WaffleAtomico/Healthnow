import React, { useEffect, useState } from "react";

import "../styles/InputText/StyleSheet.css"


// Pendiente de revisar, dimensiones y el componente con sus estilos en general
function InputText(props){ 
    const [error, SetError] = useState("");
    const [infoAdicional, SetInfoAdicional] = useState("");

    useEffect(()=>{
        if(props.error){
            SetError("Hola soy un error");
        }
    },props.infoAdicional);

    useEffect(()=>{
        if(props.error){
            SetInfoAdicional("Hola soy un error");
        }
    },props.error);


    return(
        <div className="InT_layout">
            <p className="InT_title_layout">
                {props.titulo ? props.titulo : "Título"} {props.obligatorio ? "*" : ""}
            </p>
            <input className={`InT_input_style${error ? "-error" : ""}`} type="text" /> 
            {(props.infoAdicional || error) &&
                <div className= {`InT_aditional_info_layout${error ? "-error" : ""}`} >
                    {props.infoAdicional}
                </div>
            } 
        </div>
    )
}

export default InputText