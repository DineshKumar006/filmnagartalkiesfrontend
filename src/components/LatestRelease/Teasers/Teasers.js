import React, { Component,useState,useEffect } from 'react'
import {getLimitedTeasers } from "../../controllers/FetchData/FetchData";

import {useSelector,useDispatch} from 'react-redux'
import { TeasersData,TeasersDetail} from '../../../ReduxStore/Actions/TeasersActions';
import Style from './Teasers.module.css';
import Backdrop from '../../../UIElements/backdrop/Backdrop';

const Teasers =(props)=> {

// console.log(getTeasers())

const [loading,setLoading]=useState(false)

    const TeasersStateData=useSelector(state=>state.TeasersData)
    const dispatch=useDispatch()

useEffect(()=>{
    if(Object.keys(TeasersStateData.teasersData).length===0){
        setLoading(true)
        const FetchData=async()=>{
            const  data=await getLimitedTeasers(1)
            dispatch(TeasersData(data))
            setLoading(false)
        }
        FetchData()
       
    }

},[TeasersStateData.teasersData])


// console.log(TeasersStateData.teasersData)

const moveToTeaserDetailHandler=(data)=>{
    dispatch(TeasersDetail(data))

    props.history.push({
        pathname:`/TeaserDetail/${data._id}`,
            })
 
}

        return (
            <div>
                <h2 className={Style.titleHead}>Teasers</h2>

            <div className={`container-fluid ${Style.head}`}>

            {
            
            (Object.keys(TeasersStateData.teasersData).length!==0 && loading==false)?
                 <div className={Style.innerHead}>

                 {TeasersStateData.teasersData.map(ele=>{
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
                        hey
                  </div>
            
            </div>

            </div>

        )
    }
export default Teasers;
