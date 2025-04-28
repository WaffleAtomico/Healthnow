import React from "react";

import "../styles/pages/generalstyles.css"
import "../styles/components/Notification/stylesheet.css"

function Notification(props){
    return (
        <div className="GS-horizontalContent NF-layout">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M25.0001 4.16675C13.4941 4.16675 4.16675 13.4941 4.16675 25.0001C4.16675 36.5059 13.4941 45.8334 25.0001 45.8334C36.5059 45.8334 45.8334 36.5059 45.8334 25.0001C45.8334 13.4941 36.5059 4.16675 25.0001 4.16675Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.89795 38.2203C8.89795 38.2203 13.5417 32.2917 25 32.2917C36.4584 32.2917 41.1023 38.2203 41.1023 38.2203" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 25C28.4519 25 31.25 22.2019 31.25 18.75C31.25 15.2982 28.4519 12.5 25 12.5C21.5481 12.5 18.75 15.2982 18.75 18.75C18.75 22.2019 21.5481 25 25 25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                <div className="NF-verticalContent ">
                    <div className="NF-horizontalContent">
                        <div className="NF-title">{props.title ? props.title: "Doctor sanchez"}</div> 
                        <div className="NF-date">{props.date ? props.date: "Abril 26"}</div>
                    </div>
                   <div className="NF-subject">
                        {props.subjet ? props.subjet : "Asunto"}
                   </div>
                   <div  className="NF-desc">
                        {props.description ? props.description : "Descripcion"}
                    </div>
                </div>
        </div>
    )
}

export default Notification