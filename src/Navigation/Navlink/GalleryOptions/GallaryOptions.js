import React, { Component } from 'react'
import DefaultOptions from '../../../UIElements/DefaultOptions/DefaultOptions';
import Style from "./gallaryoptions.module.css";
import { NavLink } from 'react-router-dom';

const GallaryOptions =()=> {
    
        return (
            <div className={Style.head}>
                <DefaultOptions>
                    
                    <NavLink to='/Photoshoots' exact={true} activeClassName={Style.active}> Photoshoots  </NavLink>
                    <NavLink to='/clebePic' exact={true} activeClassName={Style.active}> Cleberity Pics  </NavLink>
                    <NavLink to='/trendingPic' exact={true} activeClassName={Style.active}> Trending Pics  </NavLink>


                </DefaultOptions>
                
            </div>
        )
    
    }

    export default GallaryOptions