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
          title={"Paracetamol"}
          porcion={"500 mg, Oral, 20 tabletas"}
          description={"Tomar 1 cada 8 horas, 2 en caso de dolor intenso, si en 3 días no mejora consultar al médico"}
        />

        <Prescription 
          type={"Pastillas"}
          title={"Ibuprofeno"}
          porcion={"400 mg, Oral, 30 tabletas"}
          description={"Tomar 1 cada 12 horas después de los alimentos"}
        />

        <Prescription 
          type={"Jeringa"}
          title={"Insulina"}
          porcion={"10 unidades, Subcutánea, 1 jeringa"}
          description={"Aplicar 1 vez al día antes del desayuno"}
        />

        <Prescription 
          type={"Jarabe"}
          title={"Ambroxol"}
          porcion={"15 mg/5 ml, Oral, 120 ml"}
          description={"Tomar 10 ml cada 8 horas durante 5 días"}
        />

        <Prescription 
          type={"Pastillas"}
          title={"Metformina"}
          porcion={"850 mg, Oral, 60 tabletas"}
          description={"Tomar 1 tableta cada 12 horas con alimentos"}
        />

      </div>
    );
  }

export default Prescriptions