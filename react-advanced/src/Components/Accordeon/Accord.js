import React, {useState, useRef, useEffect} from 'react'
import './Accord.css'
import Chevron from "./chevron.svg"

export default function Accord() {

    const [toggle, settoggle] = useState(false);
    const [heightEl, setheightEl] = useState()

    const toggleState = () => {
        settoggle(!toggle);
    }
    
    const refHeight = useRef();

    useEffect (() => {
        setheightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    return (
        <div className="accord">
            <div onClick={toggleState} 
            className="accord-visible">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={Chevron} alt="chevron down" />
            </div>

            <div 
            ref={refHeight} 
            className={toggle? 'accord-toggle animated' : 'accord-toggle'}
            style={{height: toggle ? `${heightEl}` : "0px"}}>
                <p aria-hidden={toggle ? "true" : "false"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos, id tempore repellat nostrum aut minus. Nisi nostrum fugiat asperiores neque, rem necessitatibus aperiam odio et possimus ipsa officiis debitis!</p>
            </div>


        </div>
    )
}
