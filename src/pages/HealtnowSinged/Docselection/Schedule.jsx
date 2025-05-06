import React from "react";
import CalendarBlank from '../../../components/Calendar/CalendarBlank'

import '../../../styles/pages/generalstyles.css'

function Schedule() {
    return (
      <div className="GS-verticalContent GS-centerItems">
        <h1>Selecciona un dia para agendar tu cita</h1>
        <CalendarBlank />
      </div>
    );
  }

export default Schedule