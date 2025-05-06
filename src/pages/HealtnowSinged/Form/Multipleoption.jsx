import React from "react";

function Multipleoption() {
    return (
      <div>
        <FormQuestion 
          text={"¿Con qué frecuencia realizas actividad física moderada (Ej. Caminar rápido o andar en bicicleta)?"}/>
        <Checkbox text={"Mucha"}/>
        <Checkbox text={"Depende"}/>
        <Checkbox text={"Demasiada"}/>
      </div>
    );
  }

export default Multipleoption