import React, { useState } from "react";
import "../../styles/Calendar/Style_CalendarBlank.css"
import CalendarDay from "./CalendarDay";


function CalendarBlank(props){
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const [mesActual, setMesActual] = useState(0); // Índice del mes (0 = Enero)

    const cambiarMes = (direccion) => {
        setMesActual(prev => {
            // Cambia el mes y asegura que permanezca entre 0-11
            const nuevoMes = (prev + direccion + 12) % 12;
            return nuevoMes;
        });
    };

    return (
        <div className="CB_layout CB_style">
            <div className="CB_header"> {/* Parte de arriba */}
                <div className="CB_icons"  onClick={() => cambiarMes(-1)}> {/* Boton izquierda */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <path d="M21.8333 42.6667C33.3392 42.6667 42.6667 33.3392 42.6667 21.8333C42.6667 10.3274 33.3392 1 21.8333 1C10.3274 1 1 10.3274 1 21.8333C1 33.3392 10.3274 42.6667 21.8333 42.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M30.5034 22.1234H13.8334M13.8334 22.1234L21.1265 14.8334M13.8334 22.1234L21.1265 29.4134" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>                 
                <h1> {/* Titulo mes */}
                    {meses[mesActual]}
                </h1>
                <div className="CB_icons"  onClick={() => cambiarMes(1)}> {/* Boton derecha */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <path d="M21.8333 0.999956C10.3275 0.999956 0.999987 10.3275 0.999987 21.8333C0.999987 33.3392 10.3275 42.6666 21.8333 42.6666C33.3393 42.6666 42.6667 33.3392 42.6667 21.8333C42.6667 10.3275 33.3393 0.999956 21.8333 0.999956Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.1633 21.5433L29.8333 21.5433M29.8333 21.5433L22.5402 28.8333M29.8333 21.5433L22.5402 14.2533" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div style={{ width: "22.5rem", height: "0.0625rem", background: "#000" }}></div>
           
            <div className="CB_days_list">   {/* Dias con nombres */}
                {['L','M','M','J','V','S','D'].map((day) =>{
                    return (
                        <div className="CB_days">{day}</div>
                    )
                })}
            </div>
            <div className="CB_number_month">
                {[...Array(diasPorMes[mesActual])].map((index, i)=>{
                    return (
                        <CalendarDay dia = {i+1}/>
                    )
                })}
            </div>
        </div>
    )
}

export default CalendarBlank