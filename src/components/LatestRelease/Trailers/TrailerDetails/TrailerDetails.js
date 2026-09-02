import React, { useState,useEffect } from 'react'
import Style from "./trailerDetail.module.css";
import {TrailerDetails} from '../../../../ReduxStore/Actions/TrailersActions';
import { fetchTrailerDataById } from '../../../controllers/FetchData/FetchData';
import {useSelector,useDispatch} from 'react-redux'
import { toEmbedUrl } from '../../../../UIElements/utils/youtube'

const  TrailerDetailsComponent =(props)=> {
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()

    const TrailerDetailStateData=useSelector(state=>state.TrailersData.trailerDetails)

    useEffect(()=>{
        if(Object.keys(TrailerDetailStateData).length===0){
            setLoading(true)
            const FetchData=async()=>{
                const id=props.history.location.pathname.split('/')[2]            
                const  data=await fetchTrailerDataById(id)
                dispatch(TrailerDetails(data))
                setLoading(false)
                // console.log(response)
            }
            FetchData()
           
        }

    },[TrailerDetailStateData])


        return (
            <div className={`${Style.head} container`}>

                <div className={`${Style.left}`}>

              
                    {(Object.keys(TrailerDetailStateData).length!==0 && loading==false)&&
                           <div className={Style.leftheadInner}>
                               <div className={Style.innercontent}>
                                <p className={Style.title}><span>Trailer</span>{TrailerDetailStateData.moviename}</p>

                                <div className={Style.image}>
                                    <img src={TrailerDetailStateData.thumbnail}/>
                                </div>
                             </div>

                              
                              {toEmbedUrl(TrailerDetailStateData.youtubeTrailerlink) && (
                                  <div className={Style.video}>
                                      <iframe
                                          className={Style.videoEle}
                                          title="Video player"
                                          src={toEmbedUrl(TrailerDetailStateData.youtubeTrailerlink)}
                                          frameBorder="0"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen
                                          loading="lazy"
                                      />
                                      <button onClick={() => window.open(TrailerDetailStateData.youtubeTrailerlink, "_blank")}>Watch on Youtube</button>
                                  </div>
                              )}
                        
                            </div>                         
                    }
              </div>

              <div className={`${Style.right}`}>

              </div>

            </div>
        )
    }

    export default TrailerDetailsComponent
