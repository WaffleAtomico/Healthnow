import React from "react";

import RateByStars from "../RateByStars"
import "../../styles/pages/generalstyles.css"
import "../../styles/components/CarrouselCard/stylesheet.css"


function ContentChange({doctor, costmin, costmax, description}){ 

    return(
        <div className="CaC-Content GS-centerItems">
            <h1>{doctor}</h1>
            <h2>${costmin} - ${costmax}</h2>
            <div>{description}</div>
            <div>
                <RateByStars
                estatico={true} />
            </div>
        </div>
    )
}

export default ContentChange