import React, { Component } from 'react'
import DefaultOptions from '../../../UIElements/DefaultOptions/DefaultOptions';
import Style from "./gallaryoptions.module.css";
import { NavLink } from 'react-router-dom';

const GallaryOptions =()=> {
    
        return (
            <div className={Style.head}>
                <DefaultOptions>
                    
                    <NavLink to='/Photoshoots' exact={true} activeClassName={Style.active}> Photoshoots  </NavLink>
                    <NavLink to='/Actors' exact={true} activeClassName={Style.active}> Actors  </NavLink>
                    <NavLink to='/Actresses' exact={true} activeClassName={Style.active}> Actresses  </NavLink>
                    <NavLink to='/Events' exact={true} activeClassName={Style.active}> Events  </NavLink>
                    <NavLink to='/Workingstills' exact={true} activeClassName={Style.active}> Working Stills  </NavLink>



                </DefaultOptions>
                
            </div>
        )
    
    }

    export default GallaryOptions