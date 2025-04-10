import React from "react";
import "../../styles/Calendar/Style_CalendarDay.css"

function CalendarDay({ dia }){
    return (
        <div className="CD_layout">
            {dia}
        </div>
    )
}

export default CalendarDay