import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MainNavbar from '../../UIElements/MainNavbar/MainNavbar';
import Style from "./Navlink.module.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'; 
import CinemaOptions from './CinemaOptions/CinemaOptions';
import GallaryOptions from './GalleryOptions/GallaryOptions';
import NewsOptions from './NewsOptions/NewsOptions';
import LatestReleaseOptions from './LatestRelease/LatestRelease';

const  NavlinksComponent =()=>  {
    const [openOptions,setOpenOptions]=useState(false)
        return (
            <div className={Style.NavlinkHead}>
                <MainNavbar>

                <div className={Style.navlinksElement}>

               <NavLink to='/' activeClassName={Style.active} exact={true}> Home  </NavLink>

               {/* <NavLink to='/News' activeClassName={Style.active} exact={true}> News  </NavLink> */}

               <span className={Style.optionStyle}>
                            News    
                        <ArrowDropDownIcon style={{fontSize:15}}/>

                        <div className={Style.inneroptionStyle}>
                           <NewsOptions/>
                        </div>
                </span>


               
                   

               <NavLink to='/Reviews' exact={true} activeClassName={Style.active}> Reviews  </NavLink>
               <NavLink to='/Interviews' exact={true} activeClassName={Style.active}> Interviews  </NavLink>
       

                   <span className={Style.cinema}>
                        Latest Release    
                        <ArrowDropDownIcon style={{fontSize:15}}/>

                        <div className={Style.cinemaOptions}>
                           <LatestReleaseOptions/>
                        </div>
                   </span>


               <span className={Style.gallary}>
                          Gallary    
                        <ArrowDropDownIcon style={{fontSize:15}}/>

                        <div className={Style.gallaryOptions}>
                           <GallaryOptions/>
                        </div>
                   </span>
               <NavLink to='/About' exact={true} activeClassName={Style.active}> About us  </NavLink>



               </div>


              <div className={Style.searchBar}>
                  <input type="text" placeholder="Search Your Like" />
              </div>
               </MainNavbar>
            </div>
        )
    
}

export default NavlinksComponent