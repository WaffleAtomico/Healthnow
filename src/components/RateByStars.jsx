import React, { useState } from "react";
// import { EmptyStar } from "../icons/estella1.ico"

function RateByStars(){
    
    const [rating, setRating] = useState(null)
    const [rateColor, setColor] = useState(null)
    const [hover, setHover] = useState(0)

    return(
    <div className="RbS_layout">
        {[...Array(5)].map((star, index) =>{
            const currentRate = index + 1
            return (
            <>
                <label>
                    <input  type="radio" 
                            name="rate" 
                            value={currentRate}
                            onClick={() => setRating(currentRate)}
                            style={ {display: "none"} }
                    />
                    {/* <FaStar size={50}
                            color={currentRate <= (hover || rating) ? "yellow" : "grey"}
                    */}
                    <img
                        className='RbS_icon'
                        src={require( currentRate <= (hover || rating) 
                                            ? "../icons/EstrellaLlena.ico" :
                                             "../icons/EstrellaVacia.ico")} 
                        alt='Estella icono' 
                        onMouseEnter={()=> setHover(currentRate)}
                        onMouseLeave={()=> setHover(0)}
                        // width={20} height={20}
                    />
                </label>  
            </> 
            )
        })}
    </div>
    )
}

export default RateByStars

//Tutorial:  https://www.youtube.com/watch?v=BmhU_MoxNqQ 