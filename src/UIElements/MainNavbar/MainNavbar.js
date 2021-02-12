import React, { Component } from 'react'
import Style from "./MainNavbar.module.css";
const  MainNavbar =(props)=>  {
   
        return (
            <div className={`container-fluid ${Style.main}`}>
                {props.children}
            </div>
        )
    
}

export default MainNavbar
