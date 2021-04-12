import React, { useState,useEffect } from 'react'
import Style from "./Home.module.css";
import { getLimitedTeasers,getLimitedTrailers } from '../controllers/FetchData/FetchData';
import { LimitedTrailerData,LimitedTeasersData } from "../../ReduxStore/Actions/DefaultActions";
import { TeasersDetail } from "../../ReduxStore/Actions/TeasersActions";
import { TrailerDetails } from "../../ReduxStore/Actions/TrailersActions";

import  Backdrop  from  "../../UIElements/backdrop/Backdrop";

import { useSelector,useDispatch  } from "react-redux";





import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'
import SwiperCore, { EffectCube,Pagination ,Autoplay,EffectCoverflow} from 'swiper';

SwiperCore.use([EffectCube,Autoplay,EffectCoverflow,Pagination]);






const Home =(props)=> {
    const dispatch=useDispatch()
    const defautStateData=useSelector(state=>state.DefaultData)
    
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                if(Object.keys(defautStateData.LimitedTeasersData).length==0){
                    const r1=await getLimitedTeasers();
                    dispatch(LimitedTeasersData(r1))
                }
                if(Object.keys(defautStateData.LimitedTrailerData).length==0){
               const r2=await getLimitedTrailers();
               dispatch(LimitedTrailerData(r2))
                }
            } catch (error) {
                
            }
        }

        fetchData()

    },[])
    console.log(defautStateData)

    const clickHandler=(type,data)=>{
        if(type=="trailer"){
            dispatch(TrailerDetails(data))

            props.history.push({
                pathname:`/TrailerDetail/${data._id}`,
                    })
        }
        else if(type=="teaser"){
            dispatch(TeasersDetail(data))

            props.history.push({
                pathname:`/TeaserDetail/${data._id}`,
                    })
        }

    }

    const exploreMoreHandler=(type)=>{
        if(type=="trailer"){
            props.history.push('/Trailers')
        }
        else if(type=="teaser"){
            props.history.push('/Teasers')
        }
    }
        return (
            <div className={`container ${Style.homeHead}`}>


                <div className={Style.mainContainer1}>

                    <div className={Style.mainContainer1_text}>

                        <p className={Style.text_title}>WHAT'S <span>TODAY</span> </p>


                        <p  className={Style.text_title2}>AT FILM NAGAR TALKIES DHAMAKA !</p>


                        {/* <button className={Style.mainContainer1_btn}>EXPLORE NOW</button>


                        <button className={Style.mainContainer1_btn2}>PLAY STATION STUDIO</button> */}


                    </div>

                    <div className={Style.mainContainer1_cube}>

                        <div className={Style.swiper}>
                       
                            <Swiper
                            className={Style.swiperinner}
                            effect="cube"
                            autoplay={true}
                            loop={true}
                            grabCursor={true}
                        
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false
                              }}
                              cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94
                              }}
                            
                        
                            
                            >

                                <SwiperSlide    className={Style.swiperInnerele}>

                                    <img src={'https://i.pinimg.com/originals/64/a2/8c/64a28c25e19874be05e7c1926340f999.jpg'} />

                                </SwiperSlide>


                                <SwiperSlide    className={Style.swiperInnerele}>

                                    <img src={'https://i.redd.it/46lswpe558n61.jpg'} />

                                </SwiperSlide>                               
                                
                                <SwiperSlide    className={Style.swiperInnerele}>

                                    <img src={'https://www.filmibeat.com/ph-big/2020/12/tuck-jagadish_160887253220.jpg'} />

                                </SwiperSlide> 


                               <SwiperSlide    className={Style.swiperInnerele}>

                                    <img src={'https://d2j1wkp1bavyfs.cloudfront.net/image-assets/497698/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg?d=360x540&q=50'} />

                                </SwiperSlide> 


                                <SwiperSlide    className={Style.swiperInnerele}>

                                    <img src={' https://bingeddata.s3.amazonaws.com/uploads/2020/11/ala-vaikunthapurramuloo.jpg'} />

                                </SwiperSlide> 

                                <SwiperSlide    className={Style.swiperInnerele}>

                                <img src={' https://www.deccanherald.com/sites/dh/files/articleimages/2020/07/10/RS-1594356518.jpg'} />

                                </SwiperSlide> 



                            </Swiper>

                            </div>
                    </div>
                    
                </div>



                <div className={` ${Style.latestrelease}`}>
                    <h3 className={Style.titleHead}>Latest Release</h3>

                    <div className={Style.teaser}>

                        <div className={Style.title}>
                            <span  className={Style.title_Text_ele}>Teasers</span>
                            <span className={Style.more} onClick={()=>exploreMoreHandler('teaser')}>Explore More</span>
                        
                        </div>

                        <div className={Style.imageContainer}>

                                <div className={Style.imageContainer_box1}>
                               
                               
                                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/25/952506-rrr-releasedate.jpg"/>
                                
                                <p className={Style.imageContainer_box1_text}>Most Trending Teaser</p>

                                
                                </div>

                                <div className={Style.imageContainer_box2}>


                            {Object.keys(defautStateData.LimitedTeasersData).length>0 ? 

                                <Swiper
                                effect="coverflow"
                                className={Style.coverflowSwiper}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView= 'auto'
                                loop={true}
                                // autoplay={{
                                //     delay: 2000,
                                //     disableOnInteraction: false
                                //   }}
                                direction="vertical"

                                pagination={{ clickable: true }}


                                coverflowEffect= {{
                                    rotate: 20,
                                    stretch: 0,
                                    depth: 80,
                                    modifier: 8,
                                    slideShadows: true,
                                }}

                                >


                                {
                        
                                defautStateData.LimitedTeasersData.map(ele=>{
                                        // return <div key={ele._id} className={Style.imagehead}  onClick={()=>clickHandler('teaser',ele)}>
                                        //         <img src={ele.thumbnail}/>
                                        //     </div>

                                        return <SwiperSlide key={ele._id} className={Style.imagehead} >
                                        <img src={ele.thumbnail}/>
                                        </SwiperSlide>
                                    })

                                }

                                </Swiper>


                                :<div className={Style.BackdropHead}>
                                    <Backdrop/>
                                </div>
                            }

                                </div>

                        </div>

                    </div>

                    <div className={Style.trailer}>
                    <div className={Style.title}>
                            <span  className={Style.title_Text_ele}>Trailer</span>
                            <span className={Style.more} onClick={()=>exploreMoreHandler('trailer')}>Explore More</span>
                        
                        </div>


                    <div className={Style.imageContainer}>



                    <div className={Style.imageContainer_box1}>
                               
                               
                               <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/25/952506-rrr-releasedate.jpg"/>
                               
                               <p className={Style.imageContainer_box1_text}>Most Trending Trailer</p>

                               
                               </div>

                               <div className={Style.imageContainer_box2}>



                            {Object.keys(defautStateData.LimitedTrailerData).length>0 ? 
                                <Swiper

                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                  }}
                                effect="coverflow"
                                className={Style.coverflowSwiper}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView= 'auto'
                                loop={true}
                                direction="vertical"

                                pagination={{ clickable: true }}


                                coverflowEffect= {{
                                    rotate: 20,
                                    stretch: 0,
                                    depth: 80,
                                    modifier: 8,
                                    slideShadows: true,
                                }}
                                
                                >

                                {
                                defautStateData.LimitedTrailerData.map(ele=>{
                                      
                                return <SwiperSlide key={ele._id} className={Style.imagehead} >
                                         <img src={ele.thumbnail}/>
                                       </SwiperSlide>
                                    }) 
                                }
                                </Swiper>
   
                                    :<div className={Style.BackdropHead}>
                                    <Backdrop/>
                                </div>
                            }
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Style.endLine}></div>
                {/* <hr/> */}
                <div className={`container ${Style.review}`}>

                    <h3 className={Style.titleHead}>Reviews</h3>

                    <div className={Style.reviewList}>
                          <div className={Style.title}>
                            <span className={Style.title_Text_ele}>Latest Reviews</span>
                            <span className={Style.more} onClick={()=>exploreMoreHandler('trailsser')}>Explore More</span>
                        </div>

                        <div className={Style.imageContainer}>
                            </div>

                    </div>
                </div>

                {/* <div className={Style.Gallery}>
                    <h3>Gallery</h3>

                    <div className={Style.photoshoots}>

                    </div>

                    <div className={Style.photoshoots}>

                    </div>
                    
                    <div className={Style.photoshoots}>

                    </div>
                </div> */}

               
            </div>
        )
    }
export default Home
