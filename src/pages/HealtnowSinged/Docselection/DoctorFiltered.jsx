import React, { useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';

import CarrouselCard from "../../../components/CarrouselCard/CarrouselCard";
import ButtonIcon from "../../../components/ButtonIcon";

import 'leaflet/dist/leaflet.css';
import '../../../styles/pages/generalstyles.css'
import "../../../styles/pages/Form/FormStylesheet.css"


function DoctorFiltered({changeSlideAct, ChangeContentTo}) {
    const center = [20.6083169, -103.4147837];

    return (
      <div >
       
        <div className="GS-verticalContent GS-centerItems">
          <h1>Selecciona un doctor para agendar tu cita</h1>
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
            <div onClick={() => ChangeContentTo(0)}>
              <ButtonIcon
                iconoIzquierda={"Atras"}
                texto={"Volver"} />
            </div>

            <div onClick={() => changeSlideAct(1)}>
              <ButtonIcon 
                texto={"Siguiente"}
                iconoDerecha={"Adelante"}
                color={"verde1"}
              />
            </div>
          </div>

        </div>
      </div>
    );
  }

export default DoctorFiltered