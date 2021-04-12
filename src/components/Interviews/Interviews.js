import React, { useState,useEffect } from 'react'
import Style from './InterviewsStyle.module.css'
import {getLimitedInterviews} from '../controllers/FetchData/FetchData'


import {useSelector,useDispatch} from 'react-redux'
import { addInterviewsDetailsDataById,addInterviewsDataHandler} from '../../ReduxStore/Actions/DefaultActions';
import Backdrop from '../../UIElements/backdrop/Backdrop';

const  InterViews =(props)=>  {

    const [Loading,setLoading]=useState(false)

    const dispatch=useDispatch()
    const DefaultData=useSelector(state=>state.DefaultData)

    useEffect(()=>{
        if(Object.keys(DefaultData.LimitedInterviewsData).length===0){
            setLoading(true)
            const FetchData=async()=>{
                const  data=await getLimitedInterviews(1)
                console.log(data)
                dispatch(addInterviewsDataHandler(data))
                setLoading(false)
            }
            FetchData()
        }
    },[])

    const clickHandler=(data)=>{
        dispatch(addInterviewsDetailsDataById(data))
        props.history.push(`/InterviewsDetails/${data._id}`)
    }  
     

        return (
            <div className={`container ${Style.maincomponent}`}>

            {
             (Object.keys(DefaultData.LimitedInterviewsData).length!==0 && Loading==false)?

             <div className={Style.outerBox}>
                 {DefaultData.LimitedInterviewsData.map(ele=>{
                     return <div key={ele._id} className={Style.innerBox} onClick={()=>clickHandler(ele)}>

                            <div className={Style.imageHead}>
                            <img src={ele.thumbnail}/>
                             </div>

                             <p className={Style.title_text}>{ele.title}</p>
                            </div>
                 })
                 
                 } 
             </div>

             :
             <div className={` ${Style.eleHead}`}>
             <div  className={Style.eleHeadinner}><Backdrop/></div>
             <div  className={Style.eleHeadinner}><Backdrop/></div>
             <div  className={Style.eleHeadinner}><Backdrop/></div>
             <div  className={Style.eleHeadinner}><Backdrop/></div>
             <div  className={Style.eleHeadinner}><Backdrop/></div>
             <div  className={Style.eleHeadinner}><Backdrop/></div>
             <div  className={Style.eleHeadinner}><Backdrop/></div>
             <div  className={Style.eleHeadinner}><Backdrop/></div>
             <div  className={Style.eleHeadinner}><Backdrop/></div>


             </div>

            }
      </div>
        )
    }


    export default InterViews