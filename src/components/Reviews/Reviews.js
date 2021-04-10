import React, { useEffect, useState } from 'react'
import Style from './Review.module.css';
import axios from 'axios';
import img1 from '../../#images/r1.jpeg'
import {useDispatch} from 'react-redux'
import { ReviewDetail } from '../../ReduxStore/Actions/ReviewDetailsActions';
import Backdrop from '../../UIElements/backdrop/Backdrop';
const Reviews =(props)=> {
    const dispatch=useDispatch()
    const [reviewData,setReviewData]=useState([])
    let tt='Uppena Telugu Movie Review : Vaisshnav Tej Stars In This Love Story And A Tale Of Class Struggle'
    useEffect(() => {
        
        if(reviewData.length===0){
        
        const fetch=async()=>{
           try {
               const response=await axios.get('https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getAllReview')
            //    console.log(dd.data.result)
               setReviewData(response.data.result)
           } catch (error) {
               
           }
        }

        fetch();
    }

    }, [])

    const onImageClickHandler=(id,data)=>{
        // console.log(data)
        dispatch(ReviewDetail(data))

   props.history.push({
       pathname:`/ReviewDetail/${id}`,
       id:id

           })

   
    }
        return (
            <div className={`container ${Style.Head}`}>

                <div className={` ${Style.ReviewHeaderElement}`}>
                       <div className={Style.imagehead1}>
                          <img src={img1} className={Style.img}/>
                          <p className={Style.para} >{tt}</p>
                       </div>

                       <div className={Style.imagehead2}>
                             <div><img src={img1}/><p>{tt}</p> </div>
                             <div><img src={img1}/> <p>{tt}</p></div>
                             <div><img src={img1}/> <p>{tt}</p></div>
                             <div><img src={img1}/> <p>{tt}</p></div>

                       </div>

                </div>


                <div className={Style.HeaderElement2}> 

                    <div className={Style.HeaderElement2_E1}>
                            {reviewData.length>0?
                                <div className={` ${Style.eleHead}`}>
                            {reviewData.map(ele=>{
                                return <div key={ele._id} className={Style.eleHeadinner}>
                                        
                                                    <div className={Style.innercontent} onClick={()=>onImageClickHandler(ele._id,ele)}>
                                                        <img src={ele.thumbnail} width="320px" height="200px" className={Style.img}/>

                                                        <p>{ele.title}</p>
                                                    </div>



                                    </div>
                            })}
                            </div>:<div className={` ${Style.eleHead}`}>
                            <div  className={Style.eleHeadinner}><Backdrop/></div>
                            <div  className={Style.eleHeadinner}><Backdrop/></div>
                            <div  className={Style.eleHeadinner}><Backdrop/></div>
                            <div  className={Style.eleHeadinner}><Backdrop/></div>

                            </div>

                            }
                    </div>
       


                <div className={Style.HeaderElement2_E2}>
                    Suggations
                </div>



            </div>

            </div>
        )
    
}

export default Reviews