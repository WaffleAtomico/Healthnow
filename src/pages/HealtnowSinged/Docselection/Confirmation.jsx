import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';


import ButtonIcon from "../../../components/ButtonIcon";
import CalendarBlank from "../../../components/Calendar/CalendarBlank";

import "../../../styles/pages/Form/FormStylesheet.css"
import '../../../styles/pages/generalstyles.css'



function Confirmation({changeSlideAct, ChangeContentTo}) {
    const center = [20.6083169, -103.4147837];

    return (
      <div className="GS-verticalContent">
        
        <h1>Tu cita será el dia: </h1>
        <CalendarBlank />
        <h1>El consultorio se encuentra en:</h1>
        <MapContainer
            center={center}
            zoom={23}
            style={{ height: "50vh", width: "50vh" }} // Ocupa toda la pantalla
            scrollWheelZoom={true}
        >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
        </MapContainer>
        

        <div className="FM-bottom"> 
          <div onClick={() => changeSlideAct(1)}>
            <ButtonIcon 
            texto={"Atras"}
            iconoIzquierda={"Atras"}
            />
          </div>

          <div onClick={() => ChangeContentTo(0)}>
            <ButtonIcon 
            texto={"Aceptar"}
            iconoDerecha={"Feliz"}
            color={"verde1"}/>
          </div>
        </div>
      </div>
    );
  }

export default Confirmation