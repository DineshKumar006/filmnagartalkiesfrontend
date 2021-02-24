import React, { Component,useState,useEffect } from 'react'
import {getTeasers } from "../../controllers/FetchData/FetchData";

import {useSelector,useDispatch} from 'react-redux'
import { TeasersData} from '../../../ReduxStore/Actions/TeasersActions';
import Style from './Teasers.module.css';
import Backdrop from '../../../UIElements/backdrop/Backdrop';

const Teasers =()=> {

// console.log(getTeasers())

const [loading,setLoading]=useState(false)

    const TeasersStateData=useSelector(state=>state.TeasersData)
    const dispatch=useDispatch()

useEffect(()=>{
    if(Object.keys(TeasersStateData.teasersData).length===0){
        setLoading(true)
        const FetchData=async()=>{
            const  data=await getTeasers(1)
            dispatch(TeasersData(data))
            setLoading(false)
        }
        FetchData()
       
    }

},[TeasersStateData.teasersData])


console.log(TeasersStateData.teasersData)

        return (
            <div className={`container-fluid ${Style.head}`}>

            {
            
            (Object.keys(TeasersStateData.teasersData).length!==0 && loading==false)?
                 <div className={Style.innerHead}>

                 {TeasersStateData.teasersData.map(ele=>{
                     return <div key={ele._id} className={Style.contentHead}>
                              
                              <div  className={Style.imghead}>
                              <img src={ele.thumbnail} className={Style.image}/>

                                  </div>
                            

                             <div className={Style.title}>
                                    <p>{ele.moviename}</p>
                                    <span>CAST:{ele.cast}</span>
                                </div>
                              
                            </div>
                 })}
                  </div>

                    :
                    <div className={` ${Style.eleHead}`}>
                    <div  className={Style.eleHeadinner}><Backdrop/></div>
                    <div  className={Style.eleHeadinner}><Backdrop/></div>
                    <div  className={Style.eleHeadinner}><Backdrop/></div>
                    <div  className={Style.eleHeadinner}><Backdrop/></div>

                    </div>

            }

            
            </div>
        )
    }
export default Teasers;
