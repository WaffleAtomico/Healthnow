import React from "react";

import FormQuestion from "../../../components/FormQuestion";
import ToggleSwitch from "../../../components/ToggleSwitch";
import ButtonIcon from "../../../components/ButtonIcon";

import "../../../styles/pages/generalstyles.css"


function Closeanswer({changeSlideEvent}) {
    return (
      <div>
        <FormQuestion 
          text={"Fuma?"}/>
        <ToggleSwitch />

        <div className="GS-horizontalContent"> 
          <div onClick={() => changeSlideEvent(0)}>
            <ButtonIcon 
              texto ={"Atras"}
            />
          </div>
          <div onClick={() => changeSlideEvent(2)}>
            <ButtonIcon
              texto={"Siguiente"} />
          </div>
        </div>
      </div>
    );
  }

export default Closeanswer