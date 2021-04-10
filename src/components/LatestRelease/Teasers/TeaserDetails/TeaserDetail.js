import React, { useState,useEffect } from 'react'
import Style from "./teaserDetail.module.css";
import { TeasersDetail} from '../../../../ReduxStore/Actions/TeasersActions';
import { fetchTeaserDataById } from '../../../controllers/FetchData/FetchData';
import {useSelector,useDispatch} from 'react-redux'

const  TeaserDetail =(props)=> {
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    const TeaserDetailStateData=useSelector(state=>state.TeasersData.TeaserDetails)


    useEffect(()=>{
        if(Object.keys(TeaserDetailStateData).length===0){
            setLoading(true)
            const FetchData=async()=>{
                const id=props.history.location.pathname.split('/')[2]            
                const  data=await fetchTeaserDataById(id)
                dispatch(TeasersDetail(data))
                setLoading(false)
                // console.log(response)
            }
            FetchData()
           
        }

    },[TeaserDetailStateData])

    console.log(TeaserDetailStateData)

        return (
            <div className={`${Style.head} container`}>

                <div className={`${Style.left}`}>

              
                    {(Object.keys(TeaserDetailStateData).length!==0 && loading==false)&&
                           <div className={Style.leftheadInner}>
                               <div className={Style.innercontent}>
                                <p className={Style.title}><span style={{color:"grey"}}>MovieName</span> :{TeaserDetailStateData.moviename}</p>

                                <div className={Style.image}>
                                    <img src={TeaserDetailStateData.thumbnail}/>
                                </div>
                             </div>

                              
                              <div className={Style.video}>
                                <iframe 
                                width="780"
                                height="400"
                                src={TeaserDetailStateData.youtubelink}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                name="my video"
                                loading="lazy"
                                />
                                <button onClick={()=>{}}>Watch on Youtube</button>
                                </div>
                        
                            </div>                         
                    }
              </div>

              <div className={`${Style.right}`}>

              </div>

            </div>
        )
    }

    export default TeaserDetail
