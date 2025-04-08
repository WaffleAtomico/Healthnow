import React from "react";



import "../styles/FooterNavbar/StyleSheet.css"

function FooterNavbar(){ 
    return(
        <div className="FN_layout FN_style">
            <div className="FN_icon">
                <img
                    className='FN_icon_layout'
                    src={require(`../icons/Home.ico`)} 
                    alt='Icono Derecho del boton'
                    // onClick={}
                />
            </div>
            <div className="FN_icon">
                <img
                    className='FN_icon_layout'
                    src={require(`../icons/Receta2.ico`)} 
                    alt='Icono Derecho del boton'
                    // onClick={}
                />
            </div>
            <div className="FN_icon">
                <img
                    className='FN_icon_layout'
                    src={require(`../icons/Notificacion.ico`)} 
                    alt='Icono Derecho del boton'
                    // onClick={}
                />
            </div>
            <div className="FN_icon">
                <img
                    className='FN_icon_layout'
                    src={require(`../icons/Perfil.ico`)} 
                    alt='Icono Derecho del boton'
                    // onClick={}
                />
            </div>
        </div>
    )
}

export default FooterNavbar