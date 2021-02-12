import React, { useEffect, useState } from 'react'
import Style from './Review.module.css';
import axios from 'axios';
const Reviews =()=> {
    const [reviewData,setReviewData]=useState([])

    useEffect(() => {
        
        const fetch=async()=>{
           try {
               const response=await axios.get('https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getAllReview')
            //    console.log(dd.data.result)
               setReviewData(response.data.result)
           } catch (error) {
               
           }
        }

        fetch();

    }, [])
        return (
            <div>
               
               {reviewData.length>0?
                 <div className={Style.eleHead}>
               {reviewData.map(ele=>{
                   return <div key={ele._id} className={Style.eleHeadinner}>
                        
                                    <div className={Style.innercontent}>
                                        <img src={ele.thumbnail} width="300px" height="200px"/>

                                        <p>{ele.title}</p>
                                    </div>



                       </div>
               })}
               </div>:<div>Loading</div>

               }




            </div>
        )
    
}

export default Reviews