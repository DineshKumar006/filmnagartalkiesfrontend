import React, { Component, useState } from 'react'
import Style from './HamBurger.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import {grey,red} from '@material-ui/core/colors'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CancelIcon from '@material-ui/icons/Cancel';
import { NavLink } from 'react-router-dom';

const HamBurger =()=> {

    const [openMenu,setOpenMenu]=useState(false)

    const menuHandler=()=>{
        setOpenMenu(!openMenu)
    }
        return (
            <div className={Style.main}>

                <div className={Style.icons} onClick={menuHandler}>
                    <MenuIcon style={{fontSize:40,color:grey[100]}}/>
                </div>

                {openMenu&&
                
                    <div className={Style.menuMain}>

                        <div className={Style.closeicon} onClick={menuHandler}>
                            <HighlightOffIcon  style={{fontSize:40,color:red[500]}}/>
                        </div>

                        <div className={Style.navEle}>

                        <div className={Style.innerNavEle}>
                        <NavLink to='/' activeClassName={Style.active2} exact={true}> Home  </NavLink>
                        </div>

                        <div className={Style.innerNavEle}>
                        <p> News  </p>
                        </div>

                        <div className={Style.innerNavEle}>
                        <NavLink to='/Reviews' exact={true} activeClassName={Style.active2}> Reviews  </NavLink>
                        </div>


                        <div className={Style.innerNavEle}>
                        <NavLink to='/Interviews' exact={true} activeClassName={Style.active2}> Interviews  </NavLink>
                        </div>


                        <div className={Style.innerNavEle}>
                        <p>Gallery</p>
                        </div>

                        <div className={Style.innerNavEle}>
                        <p>Latest Release</p>
                        </div>

                        <div className={Style.innerNavEle}>
                        <NavLink to='/About' exact={true} activeClassName={Style.active2}> About us  </NavLink>
                        </div>
       
       





                        </div>
                    
                    </div>
                }
            </div>
        )
    
}


export default HamBurger
