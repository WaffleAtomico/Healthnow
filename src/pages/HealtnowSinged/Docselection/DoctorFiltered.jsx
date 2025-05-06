import React, { useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';

import CarrouselCard from "../../../components/CarrouselCard/CarrouselCard";

import 'leaflet/dist/leaflet.css';
import '../../../styles/pages/generalstyles.css'

function DcotorFiltered() {
    return (
      <div>
       
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
          <CarrouselCard />
        </div>
      </div>
    );
  }

export default DcotorFiltered