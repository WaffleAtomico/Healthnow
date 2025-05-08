import React, { useState } from "react";

import HurtSelection from "./Hurtselection";
import Closeanswer from "./Closeanswer";
import Multipleoption from "./Multipleoption";

import "../../../styles/pages/Form/FormStylesheet.css"


function Form_container({ changeContent }) {
    const [ChangeSlide, setChangeSlide] = useState(0) 

    const changeSlideEvent = (slide) => {
      setChangeSlide(slide);
    }


    return (
      <div className="FM-background">
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