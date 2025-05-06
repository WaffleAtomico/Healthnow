import React from "react";

import ContentChange from "./ContentChange";
import "../../styles/components/CarrouselCard/stylesheet.css"
import "../../styles/pages/generalstyles.css"

function CarrouselCard({doctor, costmin, costmax, description}){ 

    return(
        <div className="CaC-layout GS-centerItems">
            <div className="CaC-leftButton GS-centerItems">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M28.3232 20.2784H12.32M12.32 20.2784L19.3214 13.28M12.32 20.2784L19.3214 27.2768" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <ul className="CaC-ul">
                {[...Array(3)].map((index) => {
                    return (
                        <li className="CaC-li">
                            <ContentChange
                                doctor={"Checo perez"}
                                costmin={200}
                                costmax={300}
                                description={"Cardiologo"} />
                        </li>     
                )
                })}  
            </ul>
            <div className="CaC-rightButton GS-centerItems">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M28.3232 20.2784H12.32M12.32 20.2784L19.3214 13.28M12.32 20.2784L19.3214 27.2768" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="rotate(180 20 20)"/>
            </svg>
            </div>
        </div>
    )
}

export default CarrouselCard