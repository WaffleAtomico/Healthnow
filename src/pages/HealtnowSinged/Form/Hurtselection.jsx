import React, { useState } from "react";

import ButtonIcon from "../../../components/ButtonIcon";
import "../../../styles/pages/generalstyles.css"

function HurtSelection({ChangeContentTo, changeSlideEvent }) {
    const [side, SetSide] = useState(true)
    
    return (
      <div>
        HurtSelection

        <div className="GS-horizontalContent"> 
          <div onClick={() => ChangeContentTo(0)}>
            <ButtonIcon
              texto={"Volver a inicio"} />
          </div>

          <div onClick={() => changeSlideEvent(1)}>
            <ButtonIcon 
              texto={"Siguiente"}
              IconDerecha={"Delante"}
            />
          </div>
        </div>
      </div>
    );
  }

export default HurtSelection