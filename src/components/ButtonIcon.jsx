import React, { useEffect } from "react";

import "../styles/components/ButtonIcon/StyleSheet.css"

function ButtonIcon(props){ 
  // {iconIzquierda=true, 
  // iconDerecha=true, 
  // mostrarTexto=true, 
  // orientacion="Center", 
  // colorTexto="black",
  // colorFondo="#91E7EB",
  // Accion,}

  const variableColor = props.color || 'azul3';
  const styleOptional = {
    width: props.width ? `${props.width}rem` : undefined,
    backgroundColor: `var(--${variableColor})`
  };
    
    return (
      <div className={`BuI-propiedades  BuI-estilo  BuI-size-${props.size ? props.size : "small"}`} 
            style={styleOptional}>
       {props.iconoIzquierda &&  
        <div >
            <img
              className='BuI-icon'
              src={require(`../icons/${props.iconoIzquierda}.ico`)} 
              alt='Icono Izquierdo del boton' 
            />
        </div> 
      }
      {props.texto && 
        <div >
            <h1 className="BuI-texto">{props.texto}</h1>
        </div>
      }
      {props.iconoDerecha &&  
        <div >
            <img
              className='BuI-icon'
              src={require(`../icons/${props.iconoDerecha}.ico`)} 
              alt='Icono Derecho del boton' 
            />
        </div>
      }
      </div>
    );
  }

export default ButtonIcon