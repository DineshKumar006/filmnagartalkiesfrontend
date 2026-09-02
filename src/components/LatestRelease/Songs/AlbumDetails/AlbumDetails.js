import React, { Component, useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getPhotosByid} from '../../../controllers/FetchData/FetchData'
import {getAlbumDetailsByid} from '../../../controllers/FetchData/FetchData'

import {addPhotoDetailsHandler} from '../../../../ReduxStore/Actions/DefaultActions'
import {addAlbumDetailsDataById} from '../../../../ReduxStore/Actions/DefaultActions'
import Backdrop from '../../../../UIElements/backdrop/Backdrop'
import Style from './Album.module.css'
import { toEmbedUrl } from '../../../../UIElements/utils/youtube'
const PhotoDetails =(props)=> {
    const defaultDetailsData=useSelector(state=>state.DefaultDetailsData)
    const dispatch=useDispatch();
    console.log(defaultDetailsData)

    const [headImage,setHeadImage]=useState('');
    const [title,setTitle]=useState('')
    const [dataAvailable,setDataAvailable]=useState(false);
    const [error,setError]=useState('');

    useEffect(()=>{
        if(Object.keys(defaultDetailsData.AlbumDetailsData).length>0){
            setHeadImage(defaultDetailsData.AlbumDetailsData.thumbnail)
            setTitle(defaultDetailsData.AlbumDetailsData.moviename)
            setDataAvailable(true)
        }else{
            setHeadImage('')
            setDataAvailable(false)
            setTitle('')
        }
    },[defaultDetailsData.AlbumDetailsData])

    useEffect(()=>{
        if(Object.keys(defaultDetailsData.AlbumDetailsData).length==0){
             const fectchDatabyId=async()=>{
                //  try {
                 setDataAvailable(false)
                const id=props.history.location.pathname.split('/')[2]            
                const  data=await getAlbumDetailsByid(id)
                dispatch(addAlbumDetailsDataById(data))
                console.log(data)  
                setDataAvailable(true)
   
               
             }

             fectchDatabyId()

        }
    },[defaultDetailsData.AlbumDetailsData])
        return (
            <div>

                {dataAvailable?
                        <div className={`${Style.mainContainer} container`}>
                            <div className={Style.headimg}>
                                <p>ALBUM:{title.toUpperCase()}</p>
                               <img src={headImage}  />
                            </div>    

                        </div>
                
                :<div className={`${Style.Backdrop} container`}>
                <Backdrop/>
                </div>}

<hr/>

                {dataAvailable?
                <div className={`${Style.mainContainer2} container`}>
                   
                    {(Array.isArray(defaultDetailsData.AlbumDetailsData.youtubelinks)
                        ? defaultDetailsData.AlbumDetailsData.youtubelinks
                        : [])
                        .filter(ele => toEmbedUrl(ele.url))
                        .map(ele => (
                            <div className={Style.video} key={ele._id}>
                                <iframe
                                    className={Style.videoEle}
                                    title="Album video"
                                    src={toEmbedUrl(ele.url)}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                />
                                <button onClick={() => window.open(ele.url, "_blank")}>Watch on Youtube</button>
                            </div>
                        ))
                    }
                 </div>
                       
                
                :<div className={`${Style.Backdrop2} container`}>
                    <div>
                    <Backdrop/>
                    </div>
                    <div>
                    <Backdrop/>
                    </div>
                </div>}
            </div>
        )
    }



    export default PhotoDetails
