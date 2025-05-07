import React, { useState } from "react";

import "../styles/components/ToggleSwitch/StyleSheet.css"

function ToggleSwitch() {
    const [estadoAct, setEstadoAct] = useState(false)
    const cambiarEstado = () =>{
            setEstadoAct(estadoPrev => {
                return !estadoAct
            })
    } 
// ()=>cambiarEstado()

    return (
        <div className="TgS_layout">
        {estadoAct ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="32" viewBox="0 0 49 32" fill="none" onClick={()=>cambiarEstado()}>
                <g clip-path="url(#clip0_324_728)">
                <rect x="4" y="8" width="40" height="16" rx="8" fill="#91E7EB"/>
                <rect x="4" y="8" width="40" height="16" rx="8" fill="black" fill-opacity="0.15"/>
                <g filter="url(#filter0_d_324_728)">
                    <circle cx="34" cy="16" r="10" fill="#3BA5AD"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_d_324_728" x="20" y="6" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_324_728"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_324_728" result="shape"/>
                </filter>
                <clipPath id="clip0_324_728">
                    <rect width="49" height="32" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        ):(
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="32" viewBox="0 0 49 32" fill="none" onClick={()=>cambiarEstado()}>
                <g clip-path="url(#clip0_324_729)">
                    <rect x="8" y="9" width="40" height="16" rx="8" fill="#A7A7A7"/>
                    <g filter="url(#filter0_d_324_729)">
                    <circle cx="18" cy="17" r="10" fill="#E8E8E8"/>
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_324_729" x="4" y="7" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_324_729"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_324_729" result="shape"/>
                    </filter>
                    <clipPath id="clip0_324_729">
                    <rect width="49" height="32" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        )}
        </div>
    )
}

export default ToggleSwitch