import React, { Component, useEffect ,useState} from 'react'
import Style from './ReviewDetails.module.css';
import {useSelector,useDispatch} from 'react-redux'
import { fetchReviewDataById } from '../../controllers/FetchData/FetchData';
import { ReviewDetail } from '../../../ReduxStore/Actions/ReviewDetailsActions';

const ReviewDetails =(props)=> {
    const [loading,setLoading]=useState(false)

    const reviewStateData=useSelector(state=>state.ReviewDetailsData)
    const dispatch=useDispatch()

    // console.log(props.history.location.pathname.split('/')[2])
    // console.log("dinesh".slice(0,1))

    useEffect(()=>{
        if(Object.keys(reviewStateData.reviewData).length===0){
            setLoading(true)
            const FetchData=async()=>{
                const id=props.history.location.pathname.split('/')[2]            
                const  data=await fetchReviewDataById(id)
                dispatch(ReviewDetail(data))
                setLoading(false)
                // console.log(response)
            }
            FetchData()
           
        }

    },[reviewStateData.reviewData])

    console.log( reviewStateData.reviewData)

        return (
            <div className={`${Style.head} container`}>

                <div className={`${Style.left}`}>

              
                    {(Object.keys(reviewStateData.reviewData).length!==0 && loading==false)&&
                           <div className={Style.leftheadInner}>
                             <p className={Style.title}>{reviewStateData.reviewData.title}</p>

                              <div className={Style.image}>
                                  <img src={reviewStateData.reviewData.thumbnail}/>
                              </div>

                              <div className={Style.description}>
                              <p> <span className={Style.span1}>{reviewStateData.reviewData.review.slice(0,1)}</span>
                               <span className={Style.span2}>{reviewStateData.reviewData.review} </span></p>
                              </div>

                            </div>                         
                    }
              </div>

              <div className={`${Style.right}`}>

              </div>

            </div>
        )
    
}

export default ReviewDetails