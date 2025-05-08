import React from "react";

import FormQuestion from "../../../components/FormQuestion";
import ToggleSwitch from "../../../components/ToggleSwitch";
import ButtonIcon from "../../../components/ButtonIcon";
import RadioButtons from "../../../components/RadioButtons";


import "../../../styles/pages/generalstyles.css"
import "../../../styles/pages/Form/FormStylesheet.css"


function Closeanswer({changeSlideEvent}) {

    const itemsq1 = [
      { label: 'Nunca' },
      { label: 'A veces' },
      { label: 'Frecuentemente' },
    ];


    return (
      <div className="GS-verticalContent">
        <FormQuestion text={"Fuma?"}/>
        <ToggleSwitch />

        <FormQuestion text={"¿Con qué frecuencia experimentas dolor o molestias físicas?"}/>

        <RadioButtons items={itemsq1} />
        
        <div className="FM-bottom"> 
          <div onClick={() => changeSlideEvent(0)}>
            <ButtonIcon 
              iconoIzquierda={"Atras"}
              texto ={"Atras"}
              
            />
          </div>
          <div onClick={() => changeSlideEvent(2)}>
            <ButtonIcon
              texto={"Siguiente"}
              iconoDerecha={"Adelante"}
              color={"verde1"} />
          </div>
        </div>
      </div>
    );
  }

export default Closeanswer