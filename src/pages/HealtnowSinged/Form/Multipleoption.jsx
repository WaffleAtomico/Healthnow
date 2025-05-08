import React from "react";

import ButtonIcon from "../../../components/ButtonIcon";
import FormQuestion from "../../../components/FormQuestion";
import Checkbox from "../../../components/Checkbox";

import "../../../styles/pages/generalstyles.css"
import "../../../styles/pages/Form/FormStylesheet.css"



function Multipleoption({ changeSlideEvent, ChangeContentTo }) {
    return (
      <div className="GS-verticalContent">
        <FormQuestion 
          text={"¿Cual de estas actividades fisicas realizas?"}/>
          <Checkbox text={"Caminata"}/>
          <Checkbox text={"Deporte"}/>
          <Checkbox text={"Natación"}/>

        <FormQuestion 
          text={"¿Qué síntomas has experimentado recientemente?"}/>
          <Checkbox text={"Dolor de cabeza"}/>
          <Checkbox text={"Dolor muscular"}/>
          <Checkbox text={"Fiebre"}/>


        <div className="FM-bottom"> 
          <div onClick={() => changeSlideEvent(1)}>
            <ButtonIcon 
            texto={"Atras"}
            iconoIzquierda={"Atras"}
            />
          </div>

          <div onClick={() => ChangeContentTo(0)}>
            <ButtonIcon 
            texto={"Diagnostico"}
            iconoDerecha={"Feliz"}
            color={"verde1"}/>
          </div>
        </div>
      </div>
    );
  }

export default Multipleoption