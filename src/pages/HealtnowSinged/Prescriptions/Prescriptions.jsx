import React from "react";

import Checkbox from "../../../components/Checkbox";
import CarrouselCard from "../../../components/CarrouselCard/CarrouselCard";
import ContentChange from "../../../components/CarrouselCard/ContentChange";
import Prescription from "../../../components/Prescription";

import FormQuestion from "../../../components/FormQuestion";

import "../../../styles/pages/generalstyles.css"

function Prescriptions() {
    return (
      <div className="GS-verticalContent">
        {/* <CarrouselCard/> */}
        <Prescription 
          type={"Jarabe"}
          title = {"Paracetamol"}
          porcion = {"500 mg, Oral, 20 tabletas"}
          description = {"Tomar 1 cada 8 horas, 2 en caso de dolor intenso, si en 3 días no mejora consultar al médico"}
        />
      </div>
    );
  }

export default Prescriptions