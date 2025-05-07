import React, { useState } from "react";

import HurtSelection from "./Hurtselection";
import Closeanswer from "./Closeanswer";
import Multipleoption from "./Multipleoption";


function Form_container({ changeContent }) {
    const [ChangeSlide, setChangeSlide] = useState(0) 
    console.log("Si entro en el contenedor")

    const changeSlideEvent = (slide) => {
      console.log("Changeslide event")
      setChangeSlide(slide);
    }


    return (
      <div>
        {ChangeSlide === 0 && (
          <HurtSelection 
            ChangeContentTo={changeContent}
            changeSlideEvent={changeSlideEvent}
          />
        )}
        {ChangeSlide === 1 && (
          <Closeanswer changeSlideEvent={changeSlideEvent} />
        )}
        {ChangeSlide === 2 && (
          <Multipleoption
            ChangeContentTo={changeContent}
            changeSlideEvent={changeSlideEvent}
          />
        )}

      </div>
    );
    
}

export default Form_container