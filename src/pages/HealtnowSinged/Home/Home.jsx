import React, { useState } from "react";

import Calendar from "../../../components/Calendar/CalendarBlank"
import ButtonIcon from "../../../components/ButtonIcon"
import Docselection_container from "../Docselection/Docselection_container";
import Form_container from "../Form/Form_container";

import "../../../styles/pages/generalstyles.css"

/*
Creo que deberia haber un intermediario en estos, para el form sea abierto desde este apartado, o bueno, quiza, la otra es que si le pica a un boton
Cambie la vista
*/
function Home() {
    const [ActualContent, setActualContent] = useState(0)
    const ChangeContentTo = (option) => {
      setActualContent(option);
    }

    switch (ActualContent) {
      case 0:
        return (
          <div className="GS-verticalContent">
            <Calendar />
            <div onClick={() => ChangeContentTo(1)}>
              <ButtonIcon 
                iconoIzquierda={"Pastilla1"}
                texto={"Agendar cita"}
                width={"21"}
              />
            </div>
            <div onClick={() => ChangeContentTo(2)}>
              <ButtonIcon 
                iconoIzquierda={"Pin"}
                texto={"Cita proxima"}
                width={"21"}
            />
            </div>
          </div>
        );
      case 1:
        return <Docselection_container />
      case 2:
        return <Form_container />
      default:
        return null;
    }
  }

export default Home