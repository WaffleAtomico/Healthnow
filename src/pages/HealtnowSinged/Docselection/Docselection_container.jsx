// Intermediario de todo el formulario, muestra y no muestra depende de que se accione
import React, { useState } from "react";


import DoctorFiltered from "./DoctorFiltered"
import Schedule from "./Schedule"
import Confirmation from  "./Confirmation"

function Docselection_container({ changeContent }) {
    const [ChangeSlide, setChangeSlide] = useState(0)
    
    const changeSlideEvent = (slide) => {
      setChangeSlide(slide);
    }

    return (
      <div>
        {ChangeSlide === 0 && <DoctorFiltered 
                                changeSlideAct={changeSlideEvent}
                                ChangeContentTo={changeContent}/>}
        {ChangeSlide === 1 && <Schedule changeSlideAct={changeSlideEvent}/>}
        {ChangeSlide === 2 && <Confirmation 
                                changeSlideAct={changeSlideEvent}
                                ChangeContentTo={changeContent}/>}
      </div>
    );    
  }

export default Docselection_container