import React, { Component, useEffect, useState } from 'react'
import Style from '../defaultStyle.module.css';
import PageHeader from '../../../UIElements/PageHeader/PageHeader'
import Backdrop from '../../../UIElements/backdrop/Backdrop'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import { getLimitedFemaleActors } from "../../controllers/FetchData/FetchData";
import {addFemaleActorsDataHandler,addFemaleActorDetailsDataById} from '../../../ReduxStore/Actions/DefaultActions'
import { useSelector,useDispatch } from 'react-redux';
const FeMaleActors =(props)=>  {

    const dispatch = useDispatch();
    const DefaultData=useSelector(state=>state.DefaultData)
    console.log(DefaultData)
    const [Loading,setLoading]=useState(false)

    useEffect(()=>{
        if(!Array.isArray(DefaultData.LimitedFemaleActorsData) || DefaultData.LimitedFemaleActorsData.length===0){
            setLoading(true)
            const FetchData=async()=>{
                const  data=await getLimitedFemaleActors(1)
                console.log(data)
                dispatch(addFemaleActorsDataHandler(data))
                setLoading(false)
            }
            FetchData()
        }
    },[])


  const clickHandler=(data)=>{
      dispatch(addFemaleActorDetailsDataById(data))
      props.history.push(`/ActressesDetails/${data._id}`)
  }  
        return (
            <div className={`container ${Style.maincomponent}`}>

                <PageHeader
                    title="Actresses"
                    parent="Gallery"
                    subtitle="Leading women of Telugu cinema"
                    icon={<PeopleAltIcon style={{ fontSize: 26 }} />}
                />


                  {
                   (Array.isArray(DefaultData.LimitedFemaleActorsData) && DefaultData.LimitedFemaleActorsData.length>0 && Loading===false)&&
                   <div className={Style.outerBox}>
                       {DefaultData.LimitedFemaleActorsData.map(ele=>{
                           return <div key={ele._id} className={`${Style.innerBox} ${Style.tagActress}`} onClick={()=>clickHandler(ele)}>

                                  <div className={Style.imageHead}>
                                  <img src={ele.thumbnail}/>
                                   </div>

                                   <p>{ele.title}</p>
                                  </div>
                       })
                       
                       } 


                   </div>
  
                  }

                  {!(Array.isArray(DefaultData.LimitedFemaleActorsData) && DefaultData.LimitedFemaleActorsData.length > 0) && (
                      <div className={Style.eleHead}>
                          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                              <div className={Style.eleHeadinner} key={i}><Backdrop /></div>
                          ))}
                      </div>
                  )}
            </div>
        )
    }

    export default FeMaleActors
