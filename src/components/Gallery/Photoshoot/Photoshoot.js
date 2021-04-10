import React, { Component, useEffect, useState } from 'react'
import Style from '../defaultStyle.module.css';
import { getLimitedPhotos } from "../../controllers/FetchData/FetchData";
import {getLimitedPhotoDataHandler} from '../../../ReduxStore/Actions/PhotoshootActions'
import {addPhotoDetailsHandler} from '../../../ReduxStore/Actions/DefaultActions'
import { useSelector,useDispatch } from 'react-redux';
const Photoshoot =(props)=>  {

    const dispatch = useDispatch();
    const DefaultData=useSelector(state=>state.DefaultData)
    console.log(DefaultData)
    const [Loading,setLoading]=useState(false)

    useEffect(()=>{
        if(Object.keys(DefaultData.LimitedPhotoData).length===0){
            setLoading(true)
            const FetchData=async()=>{
                const  data=await getLimitedPhotos(1)
                console.log(data)
                dispatch(getLimitedPhotoDataHandler(data))
                setLoading(false)
            }
            FetchData()
        }
    },[])


  const clickHandler=(data)=>{
      dispatch(addPhotoDetailsHandler(data))
      props.history.push(`/Photodetails/${data._id}`)
  }  
        return (
            <div className={`container ${Style.maincomponent}`}>

                  {
                   (Object.keys(DefaultData.LimitedPhotoData).length!==0 && Loading==false)&&
                   <div className={Style.outerBox}>
                       {DefaultData.LimitedPhotoData.map(ele=>{
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

    export default Photoshoot
