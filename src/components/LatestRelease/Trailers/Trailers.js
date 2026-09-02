import React, { Component,useState,useEffect,useRef } from 'react'
import {getTeasers,getTrailers } from "../../controllers/FetchData/FetchData";

import {useSelector,useDispatch} from 'react-redux'
import { TrailerData,TrailerDetails} from '../../../ReduxStore/Actions/TrailersActions';
import Style from './Trailers.module.css';
import PageHeader from '../../../UIElements/PageHeader/PageHeader';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import Backdrop from '../../../UIElements/backdrop/Backdrop';

const Trailers =(props)=> {

// console.log(getTeasers())

const [loading,setLoading]=useState(false)

    const TrailersStateData=useSelector(state=>state.TrailersData)

    const dispatch=useDispatch()

// guards the fetch so it fires only once per mount, even if the API
// responds with an empty list (which would otherwise re-trigger the effect)
const fetchedRef=useRef(false)

const trailers=Array.isArray(TrailersStateData.trailerData)?TrailersStateData.trailerData:[]

useEffect(()=>{
    if(fetchedRef.current || trailers.length!==0){
        return
    }
    fetchedRef.current=true

    let isMounted=true
    setLoading(true)

    const FetchData=async()=>{
        const data=await getTrailers(1)
        if(!isMounted){
            return
        }
        if(Array.isArray(data)){
            dispatch(TrailerData(data))
        }
        setLoading(false)
    }
    FetchData()

    return ()=>{
        isMounted=false
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])



const moveToTeaserDetailHandler=(data)=>{
    dispatch(TrailerDetails(data))

    props.history.push({
        pathname:`/TrailerDetail/${data._id}`,
            })
 
}

        return (
            <div className={`container ${Style.head}`}>

            <PageHeader
                title="Trailers"
                parent="Latest Release"
                subtitle="Full trailers for every upcoming release"
                icon={<MovieFilterIcon style={{ fontSize: 26 }} />}
            />

            {
            
            (trailers.length!==0 && loading===false)?
                 <div className={Style.innerHead}>

                 {trailers.map(ele=>{
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
            </div>

        )
    }
export default Trailers;
