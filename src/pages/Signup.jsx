import React from "react";
import { Link } from "react-router-dom";


import InputText from "../components/InputText";
import ButtonIcon from "../components/ButtonIcon";

import "../styles/pages/generalstyles.css"
import "../styles/pages/Editaccount/stylesheet.css"

function Signup() {
    return (
      <div className="GS-verticalContent EA-layout">
        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none">
          <path d="M20.8333 197.917V93.75C20.8333 82.2441 30.1607 72.9167 41.6666 72.9167H46.875C53.4324 72.9167 59.6072 69.8293 63.5416 64.5833L86.6666 33.75C87.847 32.1763 89.6995 31.25 91.6667 31.25H158.333C160.301 31.25 162.153 32.1763 163.333 33.75L186.458 64.5833C190.393 69.8293 196.568 72.9167 203.125 72.9167H208.333C219.84 72.9167 229.167 82.2441 229.167 93.75V197.917C229.167 209.423 219.84 218.75 208.333 218.75H41.6666C30.1607 218.75 20.8333 209.423 20.8333 197.917Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M125 177.083C148.011 177.083 166.667 158.428 166.667 135.417C166.667 112.405 148.011 93.75 125 93.75C101.988 93.75 83.3333 112.405 83.3333 135.417C83.3333 158.428 101.988 177.083 125 177.083Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className="EA-inputcontainer ">
          <InputText 
            titulo={"Nombre"}
          />
          <InputText 
            titulo={"CURP"}
          />
          <InputText 
            titulo={"Fecha de nacimiento"}
            type={"date"}
          />
          <InputText 
            titulo={"E-mail"}
          />
        </div>
        <Link to="/Healthnow/build/terms&conditions" >
            <ButtonIcon 
              texto={"Crear cuenta"}
              iconoDerecha={"Adelante"}
              color={"Success"}
            />
          </Link>
      </div>
    );
  }

export default Signup