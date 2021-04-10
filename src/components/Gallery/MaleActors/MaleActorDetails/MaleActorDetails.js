import React, { Component, useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getMaleActorByid} from '../../../controllers/FetchData/FetchData'
import {addActorDetailsDataById} from '../../../../ReduxStore/Actions/DefaultActions'

import Style from './MaleActorDetails.module.css'
const MaleActorDetails =(props)=> {
    const defaultDetailsData=useSelector(state=>state.DefaultDetailsData)
    const dispatch=useDispatch();
    console.log(defaultDetailsData)

    const [headImage,setHeadImage]=useState('');
    const [title,setTitle]=useState('')
    const [dataAvailable,setDataAvailable]=useState(false);
    const [error,setError]=useState('');

    useEffect(()=>{
        if(Object.keys(defaultDetailsData.ActorDetailsData).length>0){
            setHeadImage(defaultDetailsData.ActorDetailsData.thumbnail)
            setTitle(defaultDetailsData.ActorDetailsData.title)
            setDataAvailable(true)
        }else{
            setHeadImage('')
            setDataAvailable(false)
            setTitle('')
        }
    },[defaultDetailsData.ActorDetailsData])

    useEffect(()=>{
        if(Object.keys(defaultDetailsData.ActorDetailsData).length==0){
             const fectchDatabyId=async()=>{
                //  try {
                 setDataAvailable(false)
                const id=props.history.location.pathname.split('/')[2]            
                const  data=await getMaleActorByid(id)
                dispatch(addActorDetailsDataById(data))
                console.log(data)  
                setDataAvailable(true)
   
               
             }

             fectchDatabyId()

        }
    },[defaultDetailsData.ActorDetailsData])
        return (
            <div>

                {dataAvailable?
                        <div className={`${Style.mainContainer} container`}>
                            <div className={Style.headimg}>
                                <p>{title.toUpperCase()}</p>
                               <img src={headImage}  />
                            </div>    

                        </div>
                
                :'Loading'}



                {dataAvailable?
                <div className={`${Style.mainContainer2} container`}>
                   
                    { defaultDetailsData.ActorDetailsData.images.map(ele=>{
                            return <div className={`${Style.headimg2}`} key={ele._id}>
                                    <img src={ele.imageurl} />
                                </div>
                        })
                    }
                 </div>
                        // <div className={`${Style.mainContainer2} container`}>
                        //     <div className={Style.headimg2}>
                        //        <img src={}  />
                        //     </div>    

                        // </div>
                
                :'Loading'}
            </div>
        )
    }



    export default MaleActorDetails
