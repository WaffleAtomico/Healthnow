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

    return (
      <div className="GS-verticalContent">
          {ActualContent === 0 && (
              <>
                  <Calendar />
                  <div  onClick={()=>ChangeContentTo(2)} >
                    <ButtonIcon 
                        iconoIzquierda="Pastilla2"
                        texto="Agendar Cita"
                        width="21"
                    />
                  </div>
                  <div  onClick={()=>ChangeContentTo(1)} >
                    <ButtonIcon 
                        iconoIzquierda="Doctora"
                        texto="Diagnostico"
                        width="21"
                    />
                  </div>
              </>
          )}
          {ActualContent === 1 && <Form_container changeContent={ChangeContentTo} />}
          {ActualContent === 2 && <Docselection_container changeContent={ChangeContentTo} />}
      </div>
  )
  }

export default Home