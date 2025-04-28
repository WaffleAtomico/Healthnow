import React from "react";

import Calendar from "../../../components/Calendar/CalendarBlank"
import ButtonIcon from "../../../components/ButtonIcon"


import "../../../styles/pages/generalstyles.css"

/*
Creo que deberia haber un intermediario en estos, para el form sea abierto desde este apartado, o bueno, quiza, la otra es que si le pica a un boton
Cambie la vista
*/
function Home() {
    return (
      <div className="GS-verticalContent">
        <Calendar />
        <div>
          <ButtonIcon 
            iconoIzquierda={"Pastilla1"}
            texto={"Agendar cita"}
            width={"21"}
          />
        </div>
        <div>
          <ButtonIcon 
            iconoIzquierda={"Pin"}
            texto={"Cita proxima"}
            width={"21"}
        />
        </div>
      </div>
    );
  }

export default Home