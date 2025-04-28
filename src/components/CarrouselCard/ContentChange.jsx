import React from "react";

import RateByStars from "../RateByStars"

function ContentChange({doctor, costmin, costmax, description}){ 

    return(
        <div>
            <div></div>
            <div>
                <RateByStars />
            </div>
            <div></div>
        </div>
    )
}

export default ContentChange