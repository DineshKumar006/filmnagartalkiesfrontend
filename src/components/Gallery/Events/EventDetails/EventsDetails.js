import React, {useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getEventByid} from '../../../controllers/FetchData/FetchData'
import {addEventDetailsDataById} from '../../../../ReduxStore/Actions/DefaultActions'

import Style from './EventsDetails.module.css'
import Backdrop from '../../../../UIElements/backdrop/Backdrop'
import { toEmbedUrl } from '../../../../UIElements/utils/youtube'

const EventsDetails =(props)=> {
    const defaultDetailsData=useSelector(state=>state.DefaultDetailsData)
    const dispatch=useDispatch();
    console.log(defaultDetailsData)

    const [headImage,setHeadImage]=useState('');
    const [title,setTitle]=useState('')
    const [dataAvailable,setDataAvailable]=useState(false);
    const [error,setError]=useState('');

    useEffect(()=>{
        if(Object.keys(defaultDetailsData.EventDetailsData).length>0){
            setHeadImage(defaultDetailsData.EventDetailsData.thumbnail)
            setTitle(defaultDetailsData.EventDetailsData.title)
            setDataAvailable(true)
        }else{
            setHeadImage('')
            setDataAvailable(false)
            setTitle('')
        }
    },[defaultDetailsData.EventDetailsData])

    useEffect(()=>{
        if(Object.keys(defaultDetailsData.EventDetailsData).length==0){
             const fectchDatabyId=async()=>{
                 setDataAvailable(false)
                const id=props.history.location.pathname.split('/')[2]            
                const  data=await getEventByid(id)
                dispatch(addEventDetailsDataById(data))
                // console.log(data)  
                setDataAvailable(true)
   
               
             }

             fectchDatabyId()

        }
    },[defaultDetailsData.EventDetailsData])
        return (
            <div>

                {dataAvailable?
                        <div className={`${Style.mainContainer} container`}>
                            <div className={Style.headimg}>
                                <p>{title.toUpperCase()}</p>
                               <img src={headImage}  />
                            </div>    

                        </div>
                
                :
                <div className={`${Style.Backdrop} container`}>
                <Backdrop/>
                </div>
                }

<hr/>

                {dataAvailable?
                <div className={`${Style.mainContainer2} container`}>
                   
                    { defaultDetailsData.EventDetailsData.images.map(ele=>{
                            return <div className={`${Style.headimg2}`} key={ele._id}>
                                    <img src={ele.imageurl} />
                                </div>
                        })
                    }



                    {toEmbedUrl(defaultDetailsData.EventDetailsData.youtubelink) && (
                        <div className={Style.video}>
                            <iframe
                                className={Style.videoEle}
                                title="Video player"
                                src={toEmbedUrl(defaultDetailsData.EventDetailsData.youtubelink)}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            />
                            <button onClick={() => window.open(defaultDetailsData.EventDetailsData.youtubelink, "_blank")}>Watch on Youtube</button>
                        </div>
                    )}

            
                 </div>
                       
                
                :<div className={`${Style.Backdrop2} container`}>
                <Backdrop/>
                </div>
                }
            </div>
        )
    }



    export default EventsDetails
