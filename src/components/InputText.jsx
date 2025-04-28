import React, { useEffect, useState } from "react";
import "../styles/components/InputText/StyleSheet.css";

function InputText(props) {
    const [error, setError] = useState("");
    const [infoAdicional, setInfoAdicional] = useState("");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (props.error) {
            setError(props.error);
        } else {
            setError("");
        }

        if (props.infoAdicional) {
            setInfoAdicional(props.infoAdicional);
        }
    }, [props.error, props.infoAdicional]);

    useEffect(() => {
        if (props.value) {
            setInputValue(props.value);
        } else if (props.placeholder && props.type !== "date") {
            setInputValue(props.placeholder);
        }
    }, [props.value, props.placeholder]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        
        if (props.onChange) {
            props.onChange(e);
        }
    };

    return (
        <div className="InT_layout">
            <div className="InT_title_layout">
                {props.titulo || "Título"} {props.obligatorio && "*"}
            </div>
            
            <input
                className={`InT_input_style${error ? "-error" : ""}`}
                type={props.type || "text"}
                placeholder={props.placeholder || props.titulo}
                value={inputValue}
                onChange={handleChange}
            />
            
            {(infoAdicional || error) && (
                <div className={`InT_aditional_info_layout${error ? "-error" : ""}`}>
                    {error || infoAdicional}
                </div>
            )}
        </div>
    );
}

export default InputText;
