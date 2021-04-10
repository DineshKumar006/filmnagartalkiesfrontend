import React, { Component, useEffect, useState } from 'react'
import Style from '../defaultStyle.module.css';
import { getLimitedMaleActors } from "../../controllers/FetchData/FetchData";
import {addActorsDataHandler,addActorDetailsDataById} from '../../../ReduxStore/Actions/DefaultActions'
import { useSelector,useDispatch } from 'react-redux';
const MaleActors =(props)=>  {

    const dispatch = useDispatch();
    const DefaultData=useSelector(state=>state.DefaultData)
    console.log(DefaultData)
    const [Loading,setLoading]=useState(false)

    useEffect(()=>{
        if(Object.keys(DefaultData.LimitedActorsData).length===0){
            setLoading(true)
            const FetchData=async()=>{
                const  data=await getLimitedMaleActors(1)
                console.log(data)
                dispatch(addActorsDataHandler(data))
                setLoading(false)
            }
            FetchData()
        }
    },[])


  const clickHandler=(data)=>{
      dispatch(addActorDetailsDataById(data))
      props.history.push(`/ActorDetails/${data._id}`)
  }  
        return (
            <div className={`container ${Style.maincomponent}`}>

                  {
                   (Object.keys(DefaultData.LimitedActorsData).length!==0 && Loading==false)&&
                   <div className={Style.outerBox}>
                       {DefaultData.LimitedActorsData.map(ele=>{
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

    export default MaleActors
