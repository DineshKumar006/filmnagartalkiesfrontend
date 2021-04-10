import React, { Component, useEffect, useState } from 'react'
import Style from '../defaultStyle.module.css';
import { getLimitedPhotos } from "../../controllers/FetchData/FetchData";

import { getLimitedSongsAlbums } from "../../controllers/FetchData/FetchData";

import {addAlbumDataHandler,addAlbumDetailsDataById} from '../../../ReduxStore/Actions/DefaultActions'
import { useSelector,useDispatch } from 'react-redux';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import {red} from "@material-ui/core/colors";
import '../../../UIElements/GlobleStyle/globleStyle.css'
const Albums =(props)=>  {

    const dispatch = useDispatch();
    const DefaultData=useSelector(state=>state.DefaultData)
    console.log(DefaultData)
    const [Loading,setLoading]=useState(false)
    // LimitedAlbumsData
    useEffect(()=>{
        if(Object.keys(DefaultData.LimitedAlbumsData).length===0){
            setLoading(true)
            const FetchData=async()=>{
                const  data=await getLimitedSongsAlbums(1)
                console.log(data)
                dispatch(addAlbumDataHandler(data))
                setLoading(false)
            }
            FetchData()
        }
    },[])


  const clickHandler=(data)=>{
      dispatch(addAlbumDetailsDataById(data))
      props.history.push(`/AlbumDetails/${data._id}`)
  }  
        return (
            <div className={`container ${Style.maincomponent}`}>

                  {
                   (Object.keys(DefaultData.LimitedAlbumsData).length!==0 && Loading==false)&&
                   <div className={Style.outerBox}>
                       {DefaultData.LimitedAlbumsData.map(ele=>{
                           return <div key={ele._id} className={`${Style.innerBox} ${"defaultStyle"}`} onClick={()=>clickHandler(ele)}>
                                    <div className={Style.playIcon}>
                                        <PlayCircleOutlineIcon  style={{fontSize:90,color:red[500]}} className={Style.icon}/>
                                        </div>
                                  <div className={Style.imageHead}>
                                  <img src={ele.thumbnail}/>
                                   </div>

                                   <p>{ele.moviename}</p>
                                  </div>
                       })
                       
                       } 


                   </div>
  
                  }
            </div>
        )
    }

    export default Albums
