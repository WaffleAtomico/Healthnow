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
          <div>
            <Checkbox text={"Caminata"}/>
            <Checkbox text={"Deporte"}/>
            <Checkbox text={"Natación"}/> 
          </div>
          
        <FormQuestion 
          text={"¿Qué síntomas has experimentado recientemente?"}/>
          <div>
            <Checkbox text={"Dolor de cabeza"}/>
            <Checkbox text={"Dolor muscular"}/>
            <Checkbox text={"Fiebre"}/>   
          </div>
              


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