import React, { Component } from 'react'
import Style from "./style.module.css";
const DefaultOptions=(props)=>{
        return (
            <div className={Style.main}>
                {props.children}
            </div>
        )
    
}

export default DefaultOptions
