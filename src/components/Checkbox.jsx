import React, { useState } from "react";


import "../styles/components/Checkbox/StyleSheet.css"


function Checkbox(props) {
    const [checked, setChecked] = useState(false)

    return (
        <div className="ChB-container" onClick={() =>setChecked(!checked)}>
            <input type="checkbox" className="ChB-layout" name="Check" id="check"/>
            {checked ? (
                <div className="ChB-checked">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 20" fill="none">
                        <path d="M1 11.8571L9.1 20L28 1" stroke="black" stroke-width="3.0" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                ):(
                <div className="ChB-unchecked">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 32 32" fill="none">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="4.5" stroke="black"/>
                    </svg> */}
                </div>
                )
            }
            
            <label className="lateef-semibold ChB-label">
                {props.text || ""}
            </label>
        </div>
    )
}

export default Checkbox