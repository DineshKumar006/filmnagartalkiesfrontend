import React, { Component, useEffect, useState } from 'react'
import Style from '../defaultStyle.module.css';
import PageHeader from '../../../UIElements/PageHeader/PageHeader'
import Backdrop from '../../../UIElements/backdrop/Backdrop'
import CameraRollIcon from '@material-ui/icons/CameraRoll'
import { getLimitedWorkingStills } from "../../controllers/FetchData/FetchData";

import {addWorkingStillDetailsDataById,addAllWorkingStillDataHandler} from '../../../ReduxStore/Actions/DefaultActions'

import { useSelector,useDispatch } from 'react-redux';
const Events =(props)=>  {

    const dispatch = useDispatch();
    const DefaultData=useSelector(state=>state.DefaultData)
    console.log(DefaultData)
    const [Loading,setLoading]=useState(false)

    useEffect(()=>{
        if(!Array.isArray(DefaultData.LimitedWorkingStillsData) || DefaultData.LimitedWorkingStillsData.length===0){
            setLoading(true)
            const FetchData=async()=>{
                const  data=await getLimitedWorkingStills(1)
                console.log(data)
                dispatch(addAllWorkingStillDataHandler(data))
                setLoading(false)
            }
            FetchData()
        }
    },[])


  const clickHandler=(data)=>{
      dispatch(addWorkingStillDetailsDataById(data))
      props.history.push(`/WorkingDetails/${data._id}`)
  }  
        return (
            <div className={`container ${Style.maincomponent}`}>

                <PageHeader
                    title="Working Stills"
                    parent="Gallery"
                    subtitle="Behind the scenes, straight from the set"
                    icon={<CameraRollIcon style={{ fontSize: 26 }} />}
                />


                  {
                   (Array.isArray(DefaultData.LimitedWorkingStillsData) && DefaultData.LimitedWorkingStillsData.length>0 && Loading===false)&&
                   <div className={Style.outerBox}>
                       {DefaultData.LimitedWorkingStillsData.map(ele=>{
                           return <div key={ele._id} className={`${Style.innerBox} ${Style.tagStills}`} onClick={()=>clickHandler(ele)}>

                                  <div className={Style.imageHead}>
                                  <img src={ele.thumbnail}/>
                                   </div>

                                   <p>{ele.title}</p>
                                  </div>
                       })
                       
                       } 


                   </div>
  
                  }

                  {!(Array.isArray(DefaultData.LimitedWorkingStillsData) && DefaultData.LimitedWorkingStillsData.length > 0) && (
                      <div className={Style.eleHead}>
                          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                              <div className={Style.eleHeadinner} key={i}><Backdrop /></div>
                          ))}
                      </div>
                  )}
            </div>
        )
    }

    export default Events
