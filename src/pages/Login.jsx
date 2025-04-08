import React from "react";

import ButtonIcon from "../components/ButtonIcon";
import FooterNavbar from "../components/FooterNavbar";
import InputText from "../components/InputText";

function Login() {
    return (
      <div>
        soy login
        {/*         
          <h1>Soy Login: lateef</h1>
          <h2>Soy titulo</h2>
          <h3>Subtitulo</h3>
          <big>Esto es un texto grandote</big>
          <p>Esto es un texto simple</p> 
        */}
        <ButtonIcon />
        <InputText 
          infoAdicional="Info Adicional"
          // error="mensaje de error"
        />
        <FooterNavbar />
        
      </div>
    );
  }

export default Login
