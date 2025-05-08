import React, { useState } from "react";

import ButtonIcon from "../../../components/ButtonIcon";

import "../../../styles/pages/generalstyles.css"
import "../../../styles/pages/Form/FormStylesheet.css"


function HurtSelection({ChangeContentTo, changeSlideEvent }) {
    const [side, SetSide] = useState(true)
    


    return (
      <div className="GS-verticalContent" style={{paddingBottom: 0}}>
        <img 
            className="FM-img"
            onClick={() => SetSide(!side)}
            src={require(`../../../img/${side ? "cuerpodelante" : "cuerpoatras"}.png`)} 
            alt="Imagen de cuerpo humano"
        />

        <div className="FM-bottom"> 
          <div onClick={() => ChangeContentTo(0)}>
            <ButtonIcon
              iconoIzquierda={"Atras"}
              texto={"Volver"} />
          </div>

          <div onClick={() => changeSlideEvent(1)}>
            <ButtonIcon 
              texto={"Siguiente"}
              iconoDerecha={"Adelante"}
              color={"verde1"}
            />
          </div>
        </div>
      </div>
    );
  }

export default HurtSelection