import React from "react";

import "../styles/components/FormQuestion/stylesheet.css"

function FormQuestion({ text, color, widthForm }) {

    const variableColor = color || 'azul3';

    const styleOptional = {
        width: widthForm ? `${widthForm}rem` : undefined,
        backgroundColor: `var(--${variableColor})`
      };

    return (
        <div className="FQ-layout FQ-style"
         style={styleOptional}>
            <h2>{text}</h2>
        </div>
    )
}

export default FormQuestion