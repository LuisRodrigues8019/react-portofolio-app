import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"



export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 80,
             strings: ['Web Developer', 'Web Developpment'] })
    }, [])


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/luis-rodrigues.png"  />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Rodrigues Luis</h1>
                    <h3><span ref={textRef}></span></h3>  
                   
               <div className="button">
               <a href="assets/rodriguesluisresume.pdf" target="_blank" without rel="noreferrer">
               <button className="btn-hover color-8">Download Resume</button> 
               </a> 
               </div>
              
                </div>  
                
                <a href="#about" className="a1">
                    <img src="assets/down.png"/>
                </a>
            </div>
            
        </div>
    )
}
