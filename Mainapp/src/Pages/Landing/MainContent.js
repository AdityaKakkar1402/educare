import React, {useRef, useEffect} from 'react'
import background from './Images/bg4.png';
import './MainContent.css'
function MainContent({timeline}) {
    let bg = useRef(null)
    
    useEffect(()=> {
        timeline.to(bg,{
            delay: 1,
            duration: 2,
            y: "-50%",
            x: "-50%",
            opacity: 1
        })
    })
    return (
        <div>
            <div className="content">
                <h1 ref={el =>el}>
                    Educare!
                </h1>
                <p ref={el => el}>
                    Making Academic life of Student Easy
                </p>
            </div>
            <img src={background} alt="bg" className="background" ref={el => bg = el}/>
        </div>
    )
}

export default MainContent
