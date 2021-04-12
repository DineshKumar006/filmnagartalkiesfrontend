import React, { Component } from 'react';
import Style from './Footer.module.css'

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { red ,blue } from '@material-ui/core/colors';
import Logo from '../../#images/FNT_logo.jpg';
import FNT_logoMain from '../../#images/FNT_logoMain.png'

// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import { borderRadius } from '@material-ui/system';

const Footer =()=>  {


    const instaclick=()=>{
        window.open("https://www.instagram.com/filmnagartalkies/","_blank")
    }

    const youtubeclick=()=>{
        window.open("https://www.youtube.com/channel/UCqx_Q4C00mY6pTU0QD40mHQ","_blank")
    }

    const facebookclick=()=>{
        window.open("https://www.facebook.com/filmnagartalkies/","_blank")
    }

    const pinterestclick=()=>{
        window.open("https://in.pinterest.com/filmnagartalkies/","_blank")
    }

    const twitterclick=()=>{
        window.open("https://twitter.com/filmnagartalkie","_blank")

    }

        return (
            // <div className={Style.mainHeader}>

                <div className={`${Style.contactusheader} `} id="aboutus">

                     <div className={Style.logo2}>

                        <div className={Style.logoinner}>
                        <img src={FNT_logoMain}  />
                        </div>

                        <p>
                            <span className={Style.span1}>
                            FILM NAGAR TALKIES
                            </span>
                            {/* <span className={Style.span2}>
                            TALKIES
                            </span> */}
                            
                        </p>
                     </div>

                    <div  className={Style.aboutus2}>
                        <span className={Style.title}>About us</span>
                        <p className={Style.aboutusPara}>Film Nagar Talkies Digital Media Company is all about Telugu Cinema updates,
                             Movie Promotions, Exclusive Interviews,Celebrities,
                            Brand  Promotions,Short Films and Content Creation !</p>

                        <p className={Style.contactus}>
                            Contactus: <span>filmnagartalkies@gmail.com</span>
                            </p>

                    </div>

                      <div className= {Style.followus2}>
                        <ul >
                            <p className={Style.title}>Follow on</p>

                            <div className={Style.followuslogo}>

                            <li onClick={instaclick}><InstagramIcon style={{fontSize:25 ,color:red[500]}}/></li>
                            <li onClick={facebookclick}><FacebookIcon style={{fontSize:25 , color:blue[500]}}/></li>
                            <li onClick={youtubeclick}><YouTubeIcon style={{fontSize:25, color:red[500]}}/></li>
                            <li onClick={twitterclick}><TwitterIcon style={{fontSize:25,  color:blue[500]}}/></li>
                            <li onClick={pinterestclick}><PinterestIcon style={{fontSize:25, color:red[500]}}/></li>
                            </div>
                            

                        </ul>
                     </div>  



                </div>
          
        );
    }


export default Footer;






// <div  className={Style.logo}>
// {/* <div className={Style.logoinner}>
// <img src={Logo}  />
//  </div>

//  <p>
//     <span className={Style.span1}>
//     FILMNAGAR-
//     </span>
//     <span className={Style.span2}>
//     Talkies
//     </span>
    
//  </p>
//     */}

// </div>



// <div  className={Style.aboutus}>
// {/* <span className={Style.title}>About us</span>

// <p className={Style.aboutusPara}>Film Nagar Talkies Digital Media Company is all about Telugu Cinema updates,
//      Movie Promotions, Exclusive Interviews,Celebrities,
//      Brand  Promotions,Short Films and Content Creation !</p>

//  <p className={Style.contactus}>
//      Contactus: <span>filmnagartalkies@gmail.com</span>
//      </p> */}

// </div>




    // {/* <ul className= {Style.followus}>
    //     <p className={Style.title}>Follow on</p>

    //     <div className={Style.followuslogo}>

    //     <li onClick={instaclick}><InstagramIcon style={{fontSize:25 ,color:red[500]}}/></li>
    //     <li onClick={facebookclick}><FacebookIcon style={{fontSize:25 , color:blue[500]}}/></li>
    //     <li onClick={youtubeclick}><YouTubeIcon style={{fontSize:25, color:red[500]}}/></li>
    //     <li onClick={twitterclick}><TwitterIcon style={{fontSize:25,  color:blue[500]}}/></li>
    //     <li onClick={pinterestclick}><PinterestIcon style={{fontSize:25, color:red[500]}}/></li>
    //     </div>
        

    // </ul> */}