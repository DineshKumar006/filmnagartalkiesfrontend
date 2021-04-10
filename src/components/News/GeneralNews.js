import React, { useState,useEffect } from 'react'
import Style from './newsStyle.module.css'
import {getLimitedGeneralnews} from '../controllers/FetchData/FetchData'


import {useSelector,useDispatch} from 'react-redux'
import { addGeneralNewsDataHandler,addGeneralNewsDetailsDataById} from '../../ReduxStore/Actions/DefaultActions';
import Backdrop from '../../UIElements/backdrop/Backdrop';
const  News =(props)=>  {

    const [Loading,setLoading]=useState(false)

    const dispatch=useDispatch()
    const DefaultData=useSelector(state=>state.DefaultData)

    useEffect(()=>{
        if(Object.keys(DefaultData.LimitedGeneralNewsData).length===0){
            setLoading(true)
            const FetchData=async()=>{
                const  data=await getLimitedGeneralnews(1)
                console.log(data)
                dispatch(addGeneralNewsDataHandler(data))
                setLoading(false)
            }
            FetchData()
        }
    },[])

    const clickHandler=(data)=>{
        dispatch(addGeneralNewsDetailsDataById(data))
        props.history.push(`/GeneralNewsDetails/${data._id}`)
    }  
     

        return (
            <div className={`container ${Style.maincomponent}`}>

            {
             (Object.keys(DefaultData.LimitedGeneralNewsData).length!==0 && Loading==false)?
             <div className={Style.outerBox}>
                 {DefaultData.LimitedGeneralNewsData.map(ele=>{
                     return <div key={ele._id} className={Style.innerBox} onClick={()=>clickHandler(ele)}>

                            <div className={Style.imageHead}>
                            <img src={ele.thumbnail}/>
                             </div>

                             <p>{ele.newsTitle}</p>
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


    export default News