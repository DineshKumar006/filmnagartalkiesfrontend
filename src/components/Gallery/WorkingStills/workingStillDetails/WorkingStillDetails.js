import React, {useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getWorkingStillsByid} from '../../../controllers/FetchData/FetchData'

import {addEventDetailsDataById} from '../../../../ReduxStore/Actions/DefaultActions'
import {addWorkingStillDetailsDataById} from '../../../../ReduxStore/Actions/DefaultActions'

// WorkingStillDetailsData
import Style from './WorkingDetails.module.css'
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
        if(Object.keys(defaultDetailsData.WorkingStillDetailsData).length>0){
            setHeadImage(defaultDetailsData.WorkingStillDetailsData.thumbnail)
            setTitle(defaultDetailsData.WorkingStillDetailsData.title)
            setDataAvailable(true)
        }else{
            setHeadImage('')
            setDataAvailable(false)
            setTitle('')
        }
    },[defaultDetailsData.WorkingStillDetailsData])

    useEffect(()=>{
        if(Object.keys(defaultDetailsData.WorkingStillDetailsData).length==0){
             const fectchDatabyId=async()=>{
                 setDataAvailable(false)
                const id=props.history.location.pathname.split('/')[2]            
                const  data=await getWorkingStillsByid(id)
                dispatch(addWorkingStillDetailsDataById(data))
                // console.log(data)  
                setDataAvailable(true)
   
               
             }

             fectchDatabyId()

        }
    },[defaultDetailsData.WorkingStillDetailsData])
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
                   
                    { defaultDetailsData.WorkingStillDetailsData.images.map(ele=>{
                            return <div className={`${Style.headimg2}`} key={ele._id}>
                                    <img src={ele.imageurl} />
                                </div>
                        })
                    }



                    {toEmbedUrl(defaultDetailsData.WorkingStillDetailsData.youtubelink) && (
                        <div className={Style.video}>
                            <iframe
                                className={Style.videoEle}
                                title="Video player"
                                src={toEmbedUrl(defaultDetailsData.WorkingStillDetailsData.youtubelink)}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            />
                            <button onClick={() => window.open(defaultDetailsData.WorkingStillDetailsData.youtubelink, "_blank")}>Watch on Youtube</button>
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
