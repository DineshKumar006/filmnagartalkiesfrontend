import axios from 'axios';

export const fetchReviewDataById=async(id)=>{
    try {
        // https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getReview/602cf50f16faaa0015639250
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getReview/${id}`)
        // console.log(response)
        return response.data.result
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}



export const getTeasers=async(pageno)=>{
    try {
        const response=await axios.get(`http://localhost:9000/api/fnt/getLimitedTeasers?pageno=1`)
        // console.log(response)
        return response.data.result
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}
