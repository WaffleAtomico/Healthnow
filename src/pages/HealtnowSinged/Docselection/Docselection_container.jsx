// Intermediario de todo el formulario, muestra y no muestra depende de que se accione
import React, { useState } from "react";


import DoctorFiltered from "./DoctorFiltered"
import Schedule from "./Schedule"
import Confirmation from  "./Confirmation"

function Docselection_container() {
    const [ChangeSlide, setChangeSlide] = useState(0)
    console.log("Estoy dentro")
    
    const changeSlideEvent = (slide) => {
      setChangeSlide(slide);
    }

    return (
      <div>
        {ChangeSlide === 0 && <DoctorFiltered />}
        {ChangeSlide === 1 && <Schedule />}
        {ChangeSlide === 2 && <Confirmation />}
      </div>
    );    
  }

export default Docselection_container