import React, { Component, useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getFemaleActorByid} from '../../../controllers/FetchData/FetchData'
import {addFemaleActorDetailsDataById} from '../../../../ReduxStore/Actions/DefaultActions'

import Style from './FeMaleActorDetails.module.css'
const FeMaleActorDetails =(props)=> {
    const defaultDetailsData=useSelector(state=>state.DefaultDetailsData)
    const dispatch=useDispatch();
    console.log(defaultDetailsData)

    const [headImage,setHeadImage]=useState('');
    const [title,setTitle]=useState('')
    const [dataAvailable,setDataAvailable]=useState(false);
    const [error,setError]=useState('');

    useEffect(()=>{
        if(Object.keys(defaultDetailsData.FemaleActorDetailsData).length>0){
            setHeadImage(defaultDetailsData.FemaleActorDetailsData.thumbnail)
            setTitle(defaultDetailsData.FemaleActorDetailsData.title)
            setDataAvailable(true)
        }else{
            setHeadImage('')
            setDataAvailable(false)
            setTitle('')
        }
    },[defaultDetailsData.FemaleActorDetailsData])

    useEffect(()=>{
        if(Object.keys(defaultDetailsData.FemaleActorDetailsData).length==0){
             const fectchDatabyId=async()=>{
                 setDataAvailable(false)
                const id=props.history.location.pathname.split('/')[2]            
                const  data=await getFemaleActorByid(id)
                dispatch(addFemaleActorDetailsDataById(data))
                console.log(data)  
                setDataAvailable(true) 
             }

             fectchDatabyId()

        }
    },[defaultDetailsData.FemaleActorDetailsData])
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
                   
                    { defaultDetailsData.FemaleActorDetailsData.images.map(ele=>{
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



    export default FeMaleActorDetails
