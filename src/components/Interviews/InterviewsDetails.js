  
    import React, {useEffect, useState } from 'react'
    import {useSelector,useDispatch} from 'react-redux'
    import {getInterviewDetailsByid,getFilmNewsDetailsByid} from '../controllers/FetchData/FetchData'
    import {addInterviewsDetailsDataById,addFilmNewsDetailsDataById} from '../../ReduxStore/Actions/DefaultActions'
    
    import Style from './InterviewsDetailsStyle.module.css'
    import Backdrop from '../../UIElements/backdrop/Backdrop'
    
    const InterviewDetailsComponent =(props)=> {
    
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
            if(Object.keys(defaultDetailsData.InterviewsDetailsData).length>0){
                setHeadImage(defaultDetailsData.InterviewsDetailsData.thumbnail)
                setTitle(defaultDetailsData.InterviewsDetailsData.title)
                setPara1(defaultDetailsData.InterviewsDetailsData.interview_description)
    
                setDataAvailable(true)
            }else{
                setHeadImage('')
                setDataAvailable(false)
                setTitle('')
            }
        },[defaultDetailsData.InterviewsDetailsData])
    
        useEffect(()=>{
            if(Object.keys(defaultDetailsData.InterviewsDetailsData).length==0){
                 const fectchDatabyId=async()=>{
                     setDataAvailable(false)
                    const id=props.history.location.pathname.split('/')[2]            
                    const  data=await getInterviewDetailsByid(id)
                    dispatch(addInterviewsDetailsDataById(data))
                    console.log(data)  
                    setDataAvailable(true)
       
                   
                 }
    
                 fectchDatabyId()
    
            }
        },[defaultDetailsData.InterviewsDetailsData])
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
                       
                        {/* { defaultDetailsData.InterviewsDetailsData.images.map(ele=>{
                                return <div className={`${Style.headimg2}`} key={ele._id}>
                                        <img src={ele.imageurl} />
                                    </div>
                            })
                        } */}
                        <h2 style={{color:'grey'}}>{defaultDetailsData.InterviewsDetailsData.interview_description}</h2>
    
    
    
    
                        <div className={Style.video}>
                                    <iframe 
                                    className={Style.videoEle}
                                   
                                    src={defaultDetailsData.InterviewsDetailsData.youtubelink}
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
    
    
    
        export default InterviewDetailsComponent
    