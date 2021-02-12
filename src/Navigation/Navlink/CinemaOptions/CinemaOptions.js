import React, { Component } from 'react'
import DefaultOptions from '../../../UIElements/DefaultOptions/DefaultOptions';
import Style from "./cinemaoption.module.css";
import { NavLink } from 'react-router-dom';

const CinemaOptions =()=> {
    
        return (
            <div>
                <DefaultOptions>
                    
                    <NavLink to='/Reviews' exact={true} activeClassName={Style.active}> Reviews  </NavLink>
                    <NavLink to='/Trailers' exact={true} activeClassName={Style.active}> Trailers  </NavLink>
                    <NavLink to='/Posters' exact={true} activeClassName={Style.active}> Posters  </NavLink>
                    <NavLink to='/Film_News' activeClassName={Style.active} exact={true}> Film News  </NavLink>

                </DefaultOptions>
                
            </div>
        )
    
    }

    export default CinemaOptions