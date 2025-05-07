import React from "react";

import ButtonIcon from "../../../components/ButtonIcon";
import FormQuestion from "../../../components/FormQuestion";
import Checkbox from "../../../components/Checkbox";

import "../../../styles/pages/generalstyles.css"


function Multipleoption({ changeSlideEvent, ChangeContentTo }) {
    return (
      <div>
        <FormQuestion 
          text={"¿Con qué frecuencia realizas actividad física moderada (Ej. Caminar rápido o andar en bicicleta)?"}/>
        <Checkbox text={"Mucha"}/>
        <Checkbox text={"Depende"}/>
        <Checkbox text={"Demasiada"}/>



        <div className="GS-horizontalContent"> 
          <div onClick={() => changeSlideEvent(1)}>
            <ButtonIcon 
            texto={"Atras"}
            color={"Fail"}/>
          </div>

          <div onClick={() => ChangeContentTo(0)}>
            <ButtonIcon 
            texto={"Diagnostico"}
            color={"Success"}/>
          </div>
        </div>
      </div>
    );
  }

export default Multipleoption