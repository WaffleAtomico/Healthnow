import React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/Termsconditions/stylesheet.css"

import HeaderGeneral from "../components/HeaderGeneral";
import ButtonIcon from "../components/ButtonIcon";



function TermsConditions() {
    return (
      <div>
        <header>
          <HeaderGeneral 
            icono={"Documentos"}
            texto={"Términos y condiciones"}
          />
        </header>
        <div className="tc-text">
          
            <h2>1. Introducción Bienvenido a healthNow.</h2>

            <p> Estos Términos y Condiciones regulan el acceso y uso de nuestra Aplicación. Al utilizarla, usted acepta estos Términos en su totalidad. Si no está de acuerdo, por favor, no utilice la Aplicación.</p>
            <h3>2. Uso de la Aplicación</h3> 
            <p>La Aplicación proporciona información y herramientas para la gestión de salud, pero no sustituye el asesoramiento médico profesional. Consulte siempre con un profesional de la salud antes de tomar decisiones relacionadas con su salud.</p>
            <p> <h3>3. Registro y Seguridad</h3> Para utilizar ciertas funciones, es posible que deba registrarse proporcionando información precisa y actualizada. Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades realizadas en su cuenta.</p>
            <p> <h3>4. Privacidad y Protección de Datos</h3> Nos comprometemos a proteger su privacidad. Consulte nuestra Política de Privacidad para conocer cómo recopilamos, usamos y protegemos su información personal.</p>
            <p> <h3>5. Responsabilidad y Limitaciones</h3> No garantizamos la exactitud ni la disponibilidad continua de la Aplicación. No somos responsables de daños directos o indirectos derivados del uso de la Aplicación. El uso de la Aplicación es bajo su propio riesgo.</p>
            <p> <h3>6. Modificaciones</h3> Nos reservamos el derecho de modificar estos Términos en cualquier momento. Se le notificará sobre cambios importantes. El uso continuado de la Aplicación después de dichas modificaciones implica su aceptación.</p>
            <p> <h3>7. Contacto</h3> Si tiene preguntas sobre estos Términos, puede contactarnos en [Correo Electrónico de Contacto].</p>
            <h2> Gracias por utilizar HealthNow.</h2> 
        </div>
        <footer className="tc-footer">
          <div className="tc-button">
            <Link to="/Healthnow/build/mainpage"> 
              <ButtonIcon 
                iconoIzquierda={"Listo"}
                texto={"Aceptar"} />
            </Link>
          </div>
        </footer>
      </div>
    );
  }

export default TermsConditions