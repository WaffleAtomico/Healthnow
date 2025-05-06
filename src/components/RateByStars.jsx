import React, { useState } from "react";
// import { EmptyStar } from "../icons/estella1.ico"
// import Estrella1 from "../icons/svgIcons/Estrella1.svg"
// import Estrella2  from "../icons/svgIcons/Estrella2.svg"

import "../styles/components/RateByStarts/StyleSheet.css"

function RateByStars({estatico}){
    
    const [rating, setRating] = useState(null)
    const [rateColor, setColor] = useState(null)
    const [hover, setHover] = useState(0)

    return(
    <div className="RbS_layout">
        {[...Array(5)].map((star, index) =>{
            const currentRate = index + 1
            if(estatico){
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <path d="M17.8903 17.1583L23.3019 6.25787C23.9965 4.85854 26.0035 4.85854 26.6981 6.25787L32.1096 17.1583L44.2115 18.9171C45.7642 19.1427 46.3829 21.0405 45.259 22.129L36.5035 30.608L38.5698 42.5863C38.8352 44.1246 37.2112 45.2975 35.8219 44.5711L25 38.9125L14.1781 44.5711C12.7887 45.2975 11.1648 44.1246 11.4301 42.5863L13.4963 30.608L4.74114 22.129C3.61701 21.0405 4.23587 19.1427 5.78858 18.9171L17.8903 17.1583Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                )
            }else{
                return (
                    <>
                        <label>
                            <input  type="radio" 
                                    name="rate" 
                                    value={currentRate}
                                    onClick={() => setRating(currentRate)}
                                    style={ {display: "none"} }
                                    
                            />
                            {currentRate <= (hover || rating) ? (    
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"
                                    onMouseEnter={()=> setHover(currentRate)}
                                    onMouseLeave={()=> setHover(0)} >
                                    <path d="M17.8903 17.1583L23.3019 6.25787C23.9965 4.85854 26.0035 4.85854 26.6981 6.25787L32.1096 17.1583L44.2115 18.9171C45.7642 19.1427 46.3829 21.0405 45.259 22.129L36.5035 30.608L38.5698 42.5863C38.8352 44.1246 37.2112 45.2975 35.8219 44.5711L25 38.9125L14.1781 44.5711C12.7887 45.2975 11.1648 44.1246 11.4301 42.5863L13.4963 30.608L4.74114 22.129C3.61701 21.0405 4.23587 19.1427 5.78858 18.9171L17.8903 17.1583Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                ) : (
                                <svg  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"
                                    onMouseEnter={()=> setHover(currentRate)}
                                    onMouseLeave={()=> setHover(0)} >
                                    <path d="M17.8903 17.1583L23.3019 6.25787C23.9965 4.85854 26.0035 4.85854 26.6981 6.25787L32.1096 17.1583L44.2115 18.9171C45.7642 19.1427 46.3829 21.0405 45.259 22.129L36.5035 30.608L38.5698 42.5863C38.8352 44.1246 37.2112 45.2975 35.8219 44.5711L25 38.9125L14.1781 44.5711C12.7887 45.2975 11.1648 44.1246 11.4301 42.5863L13.4963 30.608L4.74114 22.129C3.61701 21.0405 4.23587 19.1427 5.78858 18.9171L17.8903 17.1583Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                )
                            }
                        </label>  
                    </> 
                    )
            }
        })}
    </div>
    )
}

export default RateByStars

//Tutorial:  https://www.youtube.com/watch?v=BmhU_MoxNqQ 


/*

<img
    className='RbS_icon'
    // src={require( currentRate <= (hover || rating) 
    //                     ? "../icons/svgIcons/Estrella1.svg" :
    //                      "../icons/svgIcons/Estrella2.svg")} 
    src={require( currentRate <= (hover || rating) 
                    ? Estrella2 : Estrella1 )}                      
    alt='Estella icono' 
    onMouseEnter={()=> setHover(currentRate)}
    onMouseLeave={()=> setHover(0)}
    // width={20} height={20}
/> 
*/