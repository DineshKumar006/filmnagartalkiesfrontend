import React, { Component, useEffect, useState } from 'react'
import Style from '../defaultStyle.module.css';
import PageHeader from '../../../UIElements/PageHeader/PageHeader'
import Backdrop from '../../../UIElements/backdrop/Backdrop'
import EventIcon from '@material-ui/icons/Event'
import { getLimitedEvents } from "../../controllers/FetchData/FetchData";

import {addEventDetailsDataById,addEventDataHandler} from '../../../ReduxStore/Actions/DefaultActions'

import { useSelector,useDispatch } from 'react-redux';
const Events =(props)=>  {

    const dispatch = useDispatch();
    const DefaultData=useSelector(state=>state.DefaultData)
    console.log(DefaultData)
    const [Loading,setLoading]=useState(false)

    useEffect(()=>{
        if(!Array.isArray(DefaultData.LimitedEventsData) || DefaultData.LimitedEventsData.length===0){
            setLoading(true)
            const FetchData=async()=>{
                const  data=await getLimitedEvents(1)
                console.log(data)
                dispatch(addEventDataHandler(data))
                setLoading(false)
            }
            FetchData()
        }
    },[])


  const clickHandler=(data)=>{
      dispatch(addEventDetailsDataById(data))
      props.history.push(`/EventDetails/${data._id}`)
  }  
        return (
            <div className={`container ${Style.maincomponent}`}>

                <PageHeader
                    title="Events"
                    parent="Gallery"
                    subtitle="Launches, audio nights and red carpets"
                    icon={<EventIcon style={{ fontSize: 26 }} />}
                />


                  {
                   (Array.isArray(DefaultData.LimitedEventsData) && DefaultData.LimitedEventsData.length>0 && Loading===false)&&
                   <div className={Style.outerBox}>
                       {DefaultData.LimitedEventsData.map(ele=>{
                           return <div key={ele._id} className={`${Style.innerBox} ${Style.tagEvent}`} onClick={()=>clickHandler(ele)}>

                                  <div className={Style.imageHead}>
                                  <img src={ele.thumbnail}/>
                                   </div>

                                   <p>{ele.title}</p>
                                  </div>
                       })
                       
                       } 


                   </div>
  
                  }

                  {!(Array.isArray(DefaultData.LimitedEventsData) && DefaultData.LimitedEventsData.length > 0) && (
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
