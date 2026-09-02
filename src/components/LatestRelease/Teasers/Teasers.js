import React, { Component,useState,useEffect,useRef } from 'react'
import {getLimitedTeasers } from "../../controllers/FetchData/FetchData";

import {useSelector,useDispatch} from 'react-redux'
import { TeasersData,TeasersDetail} from '../../../ReduxStore/Actions/TeasersActions';
import Style from './Teasers.module.css';
import PageHeader from '../../../UIElements/PageHeader/PageHeader';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import Backdrop from '../../../UIElements/backdrop/Backdrop';

const Teasers =(props)=> {

// console.log(getTeasers())

const [loading,setLoading]=useState(false)

    const TeasersStateData=useSelector(state=>state.TeasersData)
    const dispatch=useDispatch()

// guards the fetch so it fires only once per mount, even if the API
// responds with an empty list (which would otherwise re-trigger the effect)
const fetchedRef=useRef(false)

const teasers=Array.isArray(TeasersStateData.teasersData)?TeasersStateData.teasersData:[]

useEffect(()=>{
    if(fetchedRef.current || teasers.length!==0){
        return
    }
    fetchedRef.current=true

    let isMounted=true
    setLoading(true)

    const FetchData=async()=>{
        const data=await getLimitedTeasers(1)
        if(!isMounted){
            return
        }
        if(Array.isArray(data)){
            dispatch(TeasersData(data))
        }
        setLoading(false)
    }
    FetchData()

    return ()=>{
        isMounted=false
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])


// console.log(TeasersStateData.teasersData)

const moveToTeaserDetailHandler=(data)=>{
    dispatch(TeasersDetail(data))

    props.history.push({
        pathname:`/TeaserDetail/${data._id}`,
            })
 
}

        return (
            <div className={`container ${Style.head}`}>

            <PageHeader
                title="Teasers"
                parent="Latest Release"
                subtitle="Fresh teaser cuts, straight from the studios"
                icon={<MovieFilterIcon style={{ fontSize: 26 }} />}
            />

            {
            
            (teasers.length!==0 && loading===false)?
                 <div className={Style.innerHead}>

                 {teasers.map(ele=>{
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
export default Teasers;
