import React, { Component } from 'react'
import DefaultOptions from '../../../UIElements/DefaultOptions/DefaultOptions';
import Style from "./LatestRelease.module.css";
import { NavLink } from 'react-router-dom';

const LatestReleaseOptions =()=> {
    
        return (
            <div className={Style.head}>
                <DefaultOptions>
                    
                    <NavLink to='/Teasers' exact={true} activeClassName={Style.active}> Teasers  </NavLink>
                    <NavLink to='/Trailer' exact={true} activeClassName={Style.active}> Trailer  </NavLink>
                    <NavLink to='/Posters' exact={true} activeClassName={Style.active}> Posters  </NavLink>
                    <NavLink to='/Songs' exact={true} activeClassName={Style.active}> Songs  </NavLink>


                </DefaultOptions>
                
            </div>
        )
    
    }

    export default LatestReleaseOptions