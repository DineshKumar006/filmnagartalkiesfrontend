import React, { Component } from 'react'
import Style from "./MainNavbar.module.css";
const  MainNavbar =(props)=>  {
   
        return (
            <div className={` ${Style.main}`}>
                {props.children}
            </div>
        )
    
}

export default MainNavbar
