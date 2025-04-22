import React from "react";

import "../styles/components/ButtonIcon/StyleSheet.css"

function ButtonIcon(props){ 
  // {iconIzquierda=true, 
  // iconDerecha=true, 
  // mostrarTexto=true, 
  // orientacion="Center", 
  // colorTexto="black",
  // colorFondo="#91E7EB",
  // Accion,}
    
    return (
      <div className="Button_Propiedades Button_estilo" >
       {props.iconoIzquierda &&  
        <div className="Button_IconoIzquierda">
            <img
              className='Button_iconoIzquierda'
              src={require(`../icons/${props.iconoIzquierda}.ico`)} 
              alt='Icono Izquierdo del boton' 
            />
        </div> 
      }
      {props.texto && 
        <div className={`Button_Texto ${props.orientacion ? props.orientacion : ''}${props.color ? props.color: ''}`.trimEnd()}>
            <h1>{props.texto}</h1>
        </div>
      }
      {props.iconoDerecha &&  
        <div className="Button_IconoDerecha">
            <img
              className='Button_iconoDerecha'
              src={require(`../icons/${props.iconoDerecha}.ico`)} 
              alt='Icono Derecho del boton' 
            />
        </div>
      }
      </div>
    );
  }

export default ButtonIcon