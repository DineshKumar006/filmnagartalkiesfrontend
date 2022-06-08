import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MainNavbar from '../../UIElements/MainNavbar/MainNavbar';
import Style from "./Navlink.module.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'; 
import CinemaOptions from './CinemaOptions/CinemaOptions';
import GallaryOptions from './GalleryOptions/GallaryOptions';
import NewsOptions from './NewsOptions/NewsOptions';
import LatestReleaseOptions from './LatestRelease/LatestRelease';
import HamBurger from '../../UIElements/hamBurger/HamBurger'
import {red,grey} from '@material-ui/core/colors'
import FNT_logoMain from '../../#images/FNT_logoMain.png'
import {useHistory} from 'react-router-dom'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const  NavlinksComponent =(props)=>  {

    const history=useHistory()
    const navigateHandler=()=>{
        history.push('/')
    }
    
    const [openOptions,setOpenOptions]=useState(false)



    const renderSearchComponent=()=>{
        return(
            <div className={` ${Style.searchBar}`}>
            <input type="text" placeholder="Search Your Like"  className={'container'}/>
        </div>
        )
    }
        return (

            <div className={`container ${Style.Head}`}>

           
            <div className={` ${Style.NavlinkHead}`}>

                <div className={Style.Mainlogo}>
                        <img src={FNT_logoMain} onClick={navigateHandler} />
                </div>

                <div className={Style.HamBurger}>
                    <HamBurger/>
                </div>

       <div className={` ${Style.navlinksElement}`}>

                <MainNavbar>
               <NavLink to='/' activeClassName={Style.active} exact={true}> Home  </NavLink>


               <span className={Style.optionStyle}>
                            News    
                        <ArrowDropDownIcon style={{fontSize:15}}/>


                        <div className={Style.inneroptionStyle}>

                        <p className={Style.dropdonwArrow}> <ArrowDropDownIcon style={{fontSize:30,color:grey[900]}}/></p>

                           <NewsOptions/>
                        </div>
                </span>


               
                   

               <NavLink to='/Reviews' exact={true} activeClassName={Style.active}> Reviews  </NavLink>
               <NavLink to='/Interviews' exact={true} activeClassName={Style.active}> Interviews  </NavLink>
       

                   <span className={Style.cinema}>
                        Latest Release    
                        <ArrowDropDownIcon style={{fontSize:15}}/>

                        <div className={Style.cinemaOptions}>
                        <p className={Style.dropdonwArrow}> <ArrowDropDownIcon style={{fontSize:30,color:grey[900]}}/></p>

                           <LatestReleaseOptions/>
                        </div>
                   </span>


               <span className={Style.gallary}>
                          Gallery    
                        <ArrowDropDownIcon style={{fontSize:15}}/>

                        <div className={Style.gallaryOptions}>
                        <p className={Style.dropdonwArrow}> <ArrowDropDownIcon style={{fontSize:30,color:grey[900]}}/></p>

                           <GallaryOptions/>
                        </div>
                   </span>


                   

               {/* <span className={Style.gallary}>
                          Audio Book    
                        <ArrowDropDownIcon style={{fontSize:15}}/>

                         <div className={Style.gallaryOptions}>
                        <p className={Style.dropdonwArrow}> <ArrowDropDownIcon style={{fontSize:30,color:grey[900]}}/></p>

                           <GallaryOptions/>
                        </div> 
                   </span> */}

                   <span className={Style.gallary}>
                          Apps     
                        <ArrowDropDownIcon style={{fontSize:15}}/>

                   </span>

                   {/* activeClass={Style.active} hashSpy={true} to="shop_by_brand" spy={true}  smooth={true} offset={-100}  duration={500}  */}

               <Link to='aboutus'  activeClass={Style.active}
                hashSpy={true}  spy={true}  smooth={true} offset={-10}  duration={500}> About us  </Link>
               </MainNavbar>
               </div>

              
             </div>


             {renderSearchComponent()}

            </div>
        )
    
}

export default NavlinksComponent