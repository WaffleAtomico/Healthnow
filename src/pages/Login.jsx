import React from "react";

import ButtonIcon from "../components/ButtonIcon";
import FooterNavbar from "../components/FooterNavbar";
import InputText from "../components/InputText";
import RateByStars from "../components/RateByStars";
import CalendarDay from "../components/Calendar/CalendarDay";
import CalendarBlank from "../components/Calendar/CalendarBlank";
import ToggleSwitch from "../components/ToggleSwitch";

function Login() {
    return (
      <div>
        
        {/*         
          <h1>Soy Login: lateef</h1>
          <h2>Soy titulo</h2>
          <h3>Subtitulo</h3>
          <big>Esto es un texto grandote</big>
          <p>Esto es un texto simple</p> 
        */}
        Boton
        <ButtonIcon 
        iconoDerecha="Ubicacion"
        texto="Texto de boton"/>
        Entrada de texto
        <InputText 
          infoAdicional="Info Adicional"
          // error="mensaje de error"
        />
        Calificar con estrellas
        <RateByStars />
        {/* <CalendarDay dia='1' /> */}
        Calendario
        <CalendarBlank />

        Switch
        <ToggleSwitch />
        Navbar
        <FooterNavbar />
        
      </div>
    );
  }

export default Login
