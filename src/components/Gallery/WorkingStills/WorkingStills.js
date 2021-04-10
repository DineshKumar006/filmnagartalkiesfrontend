import React, { Component, useEffect, useState } from 'react'
import Style from '../defaultStyle.module.css';
import { getLimitedWorkingStills } from "../../controllers/FetchData/FetchData";

import {addWorkingStillDetailsDataById,addAllWorkingStillDataHandler} from '../../../ReduxStore/Actions/DefaultActions'

import { useSelector,useDispatch } from 'react-redux';
const Events =(props)=>  {

    const dispatch = useDispatch();
    const DefaultData=useSelector(state=>state.DefaultData)
    console.log(DefaultData)
    const [Loading,setLoading]=useState(false)

    useEffect(()=>{
        if(Object.keys(DefaultData.LimitedWorkingStillsData).length===0){
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

                  {
                   (Object.keys(DefaultData.LimitedWorkingStillsData).length!==0 && Loading==false)&&
                   <div className={Style.outerBox}>
                       {DefaultData.LimitedWorkingStillsData.map(ele=>{
                           return <div key={ele._id} className={Style.innerBox} onClick={()=>clickHandler(ele)}>

                                  <div className={Style.imageHead}>
                                  <img src={ele.thumbnail}/>
                                   </div>

                                   <p>{ele.title}</p>
                                  </div>
                       })
                       
                       } 


                   </div>
  
                  }
            </div>
        )
    }

    export default Events
