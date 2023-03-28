import React from "react"
import './buttons.css'
export const Btn =(props)=>{

    return (
        <button className={props.color==='red' ? 'red':'default'} style={{cursor:'pointer'}}>{props.name}</button>
    )
}