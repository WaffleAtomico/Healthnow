import React, { useEffect, useState } from "react";


import FooterNavbar from "../components/FooterNavbar"
import HeaderGeneral from "../components/HeaderGeneral"

import Home from "./HealtnowSinged/Home/Home"
import Docselection_container from "./HealtnowSinged/Docselection/Docselection_container"
import Editaccount from "./HealtnowSinged/EditAccount/Editaccount"
import Form from "./HealtnowSinged/Form/Form_container"
import Notifications from "./HealtnowSinged/Notifications/Notifications_container"
import Prescriptions from "./HealtnowSinged/Prescriptions/Prescriptions"

import "../styles/pages/UserMainPageBase/stylesheet.css"

function Usermainpage() {
    const [optionSelected, SetOptionSelected] = useState(0)

    const handleOptionSelected = (index) =>{
      SetOptionSelected(index)
    }
    const iconsNames = ["Home","Receta2", "Notificacion", "Perfil"]
    const moduleNames = ["citas actuales","recetas","notificaciones","Perfil"]
  
    return (
      <div>
        <HeaderGeneral 
          icono={iconsNames[optionSelected]}
          texto={moduleNames[optionSelected].toUpperCase()}
        />
        <div className="UMP-content">
          {optionSelected == 0 && <Home /> }
          {optionSelected == 1 && <Prescriptions /> }
          {optionSelected == 2 && <Notifications /> }
          {optionSelected == 3 && <Editaccount /> }
          
        </div>
        <footer>
            <FooterNavbar 
              iconsNames={iconsNames}
              handleOptionSelected={handleOptionSelected}
            />
        </footer>
      </div>
    );
  }

export default Usermainpage