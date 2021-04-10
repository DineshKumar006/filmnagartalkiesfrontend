import React, { Component,useState,useEffect } from 'react'
import {getTeasers,getTrailers } from "../../controllers/FetchData/FetchData";

import {useSelector,useDispatch} from 'react-redux'
import { TrailerData,TrailerDetails} from '../../../ReduxStore/Actions/TrailersActions';
import Style from './Trailers.module.css';
import Backdrop from '../../../UIElements/backdrop/Backdrop';

const Trailers =(props)=> {

// console.log(getTeasers())

const [loading,setLoading]=useState(false)

    const TrailersStateData=useSelector(state=>state.TrailersData)

    const dispatch=useDispatch()

useEffect(()=>{
    if(Object.keys(TrailersStateData.trailerData).length===0){
        setLoading(true)
        const FetchData=async()=>{
            const  data=await getTrailers(1)
            dispatch(TrailerData(data))
            setLoading(false)
        }
        FetchData()
       
    }

},[TrailersStateData.trailerData])



const moveToTeaserDetailHandler=(data)=>{
    dispatch(TrailerDetails(data))

    props.history.push({
        pathname:`/TrailerDetail/${data._id}`,
            })
 
}

        return (
            <div>
                <h2 className={Style.titleHead}>Trailers</h2>

            <div className={`container-fluid ${Style.head}`}>

            {
            
            (Object.keys(TrailersStateData.trailerData).length!==0 && loading==false)?
                 <div className={Style.innerHead}>

                 {TrailersStateData.trailerData.map(ele=>{
                     return <div key={ele._id} className={Style.contentHead} onClick={()=>moveToTeaserDetailHandler(ele)}>
                              
                              <div  className={Style.imghead}>
                              <img src={ele.thumbnail} className={Style.image}/>

                                  </div>
                            

                             <div className={Style.title}>
                                    <span className={Style.span1}>{ele.moviename}</span>
                                    {/* <span className={Style.span2}>CAST:{ele.cast}</span> */}
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
                    <div  className={Style.eleHeadinner}><Backdrop/></div>
                    <div  className={Style.eleHeadinner}><Backdrop/></div>
                    <div  className={Style.eleHeadinner}><Backdrop/></div>
                    <div  className={Style.eleHeadinner}><Backdrop/></div>
                    <div  className={Style.eleHeadinner}><Backdrop/></div>


                    </div>

            }



                  <div className={Style.suggestion}>
                        
                  </div>
            
            </div>

            </div>

        )
    }
export default Trailers;
