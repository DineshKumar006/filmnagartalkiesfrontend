import React, { Component } from 'react'
import DefaultOptions from '../../../UIElements/DefaultOptions/DefaultOptions';
import Style from "./newsoptions.module.css";
import { NavLink } from 'react-router-dom';

const NewsOptions =()=> {
    
        return (
            <div className={Style.head}>
                <DefaultOptions>
                    
                    <NavLink to='/generalNews' exact={true} activeClassName={Style.active}> General News  </NavLink>
                    <NavLink to='/filmNews' exact={true} activeClassName={Style.active}> Film News  </NavLink>
                </DefaultOptions>
                
            </div>
        )
    
    }

    export default NewsOptions