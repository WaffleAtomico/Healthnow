import React from "react";

import CalendarBlank from '../../../components/Calendar/CalendarBlank'
import ButtonIcon from "../../../components/ButtonIcon";

import "../../../styles/pages/Form/FormStylesheet.css"
import '../../../styles/pages/generalstyles.css'


function Schedule({changeSlideAct}) {
    return (
      <div className="GS-verticalContent GS-centerItems">
        <h1>Selecciona un dia para agendar tu cita</h1>
        <CalendarBlank />

        <div className="FM-bottom"> 
          <div onClick={() => changeSlideAct(0)}>
            <ButtonIcon 
              iconoIzquierda={"Atras"}
              texto ={"Atras"}
            />
          </div>
          <div onClick={() => changeSlideAct(2)}>
            <ButtonIcon
              texto={"Siguiente"}
              iconoDerecha={"Adelante"}
              color={"verde1"} />
          </div>
        </div>

      </div>
    );
  }

export default Schedule