import React, { Component, useEffect, useState } from 'react'
import Style from '../defaultStyle.module.css';
import { getLimitedFemaleActors } from "../../controllers/FetchData/FetchData";
import {addFemaleActorsDataHandler,addFemaleActorDetailsDataById} from '../../../ReduxStore/Actions/DefaultActions'
import { useSelector,useDispatch } from 'react-redux';
const FeMaleActors =(props)=>  {

    const dispatch = useDispatch();
    const DefaultData=useSelector(state=>state.DefaultData)
    console.log(DefaultData)
    const [Loading,setLoading]=useState(false)

    useEffect(()=>{
        if(Object.keys(DefaultData.LimitedFemaleActorsData).length===0){
            setLoading(true)
            const FetchData=async()=>{
                const  data=await getLimitedFemaleActors(1)
                console.log(data)
                dispatch(addFemaleActorsDataHandler(data))
                setLoading(false)
            }
            FetchData()
        }
    },[])


  const clickHandler=(data)=>{
      dispatch(addFemaleActorDetailsDataById(data))
      props.history.push(`/ActressesDetails/${data._id}`)
  }  
        return (
            <div className={`container ${Style.maincomponent}`}>

                  {
                   (Object.keys(DefaultData.LimitedFemaleActorsData).length!==0 && Loading==false)&&
                   <div className={Style.outerBox}>
                       {DefaultData.LimitedFemaleActorsData.map(ele=>{
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

    export default FeMaleActors
