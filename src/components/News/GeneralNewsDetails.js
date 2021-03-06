  
    import React, {useEffect, useState } from 'react'
    import {useSelector,useDispatch} from 'react-redux'
    import {getFilmNewsDetailsByid,getGeneralNewsDetailsByid} from '../controllers/FetchData/FetchData'
    import {addFilmNewsDetailsDataById,addGeneralNewsDetailsDataById} from '../../ReduxStore/Actions/DefaultActions'
    
    import Style from './newsDetailsStyle.module.css'
    import Backdrop from '../../UIElements/backdrop/Backdrop'
    
    const GeneralNewsDetailsComponent =(props)=> {
    
        const defaultDetailsData=useSelector(state=>state.DefaultDetailsData)
        const dispatch=useDispatch();
        console.log(defaultDetailsData)
    
        const [headImage,setHeadImage]=useState('');
        const [title,setTitle]=useState('')
        const [dataAvailable,setDataAvailable]=useState(false);
        const [para1,setPara1]=useState('')
        const [para2,setPara2]=useState('')
    
        const [error,setError]=useState('');
    
        useEffect(()=>{
            if(Object.keys(defaultDetailsData.GeneralNewsDetailsData).length>0){
                setHeadImage(defaultDetailsData.GeneralNewsDetailsData.thumbnail)
                setTitle(defaultDetailsData.GeneralNewsDetailsData.newsTitle)
                setPara1(defaultDetailsData.GeneralNewsDetailsData.para1)
                setPara2(defaultDetailsData.GeneralNewsDetailsData.para2)
    
                setDataAvailable(true)
            }else{
                setHeadImage('')
                setDataAvailable(false)
                setTitle('')
            }
        },[defaultDetailsData.GeneralNewsDetailsData])
    
        useEffect(()=>{
            if(Object.keys(defaultDetailsData.GeneralNewsDetailsData).length==0){
                 const fectchDatabyId=async()=>{
                     setDataAvailable(false)
                    const id=props.history.location.pathname.split('/')[2]            
                    const  data=await getGeneralNewsDetailsByid(id)
                    dispatch(addGeneralNewsDetailsDataById(data))
                    console.log(data)  
                    setDataAvailable(true)
       
                   
                 }
    
                 fectchDatabyId()
    
            }
        },[defaultDetailsData.GeneralNewsDetailsData])
            return (
                <div>
    
    
                    {dataAvailable?
                            <div className={`${Style.mainContainer} container`}>
                                <div className={Style.headimg}>
                                    <p>{title.toUpperCase()}</p>
                                   <img src={headImage}  />
                                </div>    
    
                            </div>
                    
                    :
                    <div className={`${Style.Backdrop} container`}>
                    <Backdrop/>
                    </div>
                    }
    
    <hr/>
    
                    {dataAvailable?
                    <div className={`${Style.mainContainer2} container`}>
                       
                        {/* { defaultDetailsData.GeneralNewsDetailsData.images.map(ele=>{
                                return <div className={`${Style.headimg2}`} key={ele._id}>
                                        <img src={ele.imageurl} />
                                    </div>
                            })
                        } */}
                        <h2 style={{color:'white'}}>{defaultDetailsData.GeneralNewsDetailsData.para1}</h2>
                        <p style={{color:'white'}}>{defaultDetailsData.GeneralNewsDetailsData.para2}</p>
    
    
    
    
                        <div className={Style.video}>
                                    <iframe 
                                    className={Style.videoEle}
                                   
                                    src={defaultDetailsData.GeneralNewsDetailsData.youtubelink}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    name="my video"
                                    loading="lazy"
                                    />
                                    <button onClick={()=>{}}>Watch on Youtube</button>
                        </div>
    
                
                     </div>
                           
                    
                    :<div className={`${Style.Backdrop2} container`}>
                    <Backdrop/>
                    </div>
                    }
                </div>
            )
        }
    
    
    
        export default GeneralNewsDetailsComponent
    