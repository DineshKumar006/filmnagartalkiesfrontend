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
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getLimitedTeasers?pageno=1`)
        // console.log(response)
        return response.data.result
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}


export const fetchTeaserDataById=async(id)=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getTeaser/${id}`)
        return response.data.result
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}



export const getTrailers=async(pageno)=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getLimitedTrailers?pageno=1`)
        // console.log(response)
        return response.data.result
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}


export const fetchTrailerDataById=async(id)=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getTrailer/${id}`)
        return response.data.result
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}



export const getLimitedTrailers=async()=>{
 
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getLimitedTrailers?pageno=1&limit=10`)
        return response.data.result
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}

export const getLimitedTeasers=async()=>{
 
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getLimitedTeasers?pageno=1&limit=10`)
        return response.data.result
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}




export const getLimitedPhotos=async()=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getLimitedPhotos?pageno=1&limit=10`)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}

export const getPhotosByid=async(photoId)=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getPhoto/${photoId}`)
        // console.log(response)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}




export const getLimitedMaleActors=async()=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getLimitedMaleActor?pageno=1&limit=10`)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}

export const getMaleActorByid=async(id)=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getMaleActor/${id}`)
        // console.log(response)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}





export const getLimitedFemaleActors=async()=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getLimitedFeMaleActresses?pageno=1&limit=10`)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}

export const getFemaleActorByid=async(id)=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getFeMaleActresses/${id}`)
        // console.log(response)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}



export const getLimitedEvents=async()=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getLimitedEvents?pageno=1&limit=10`)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}

export const getEventByid=async(id)=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getEvent/${id}`)
        // console.log(response)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}



export const getLimitedWorkingStills=async()=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getLimitedWorkingStill?pageno=1&limit=10`)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}

export const getWorkingStillsByid=async(id)=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getWorkingStill/${id}`)
        // console.log(response)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}



export const getLimitedSongsAlbums=async()=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getLimitedAlbums?pageno=1&limit=10`)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}

export const getAlbumDetailsByid=async(id)=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getAlbum/${id}`)
        // console.log(response)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}


export const getLimitedGeneralnews=async()=>{
 
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getLimitedGeneralnews?pageno=1&limit=10`)
        return response.data.result
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}


export const getGeneralNewsDetailsByid=async(id)=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getGeneralnews/${id}`)
        // console.log(response)
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}


export const getLimitedFilmnews=async()=>{
 
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getLimitedFilmnews?pageno=1&limit=10`)
        return response.data.result
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}

export const getFilmNewsDetailsByid=async(id)=>{
    try {
        const response=await axios.get(`https://filmnagartalkies-backendv2.herokuapp.com/api/fnt/getFilmnews/${id}`)
        console.log('dinesh kumar')
        return response.data.result
        
    } catch (error) {
        console.log(error)
        return "some thing went wrong"
    }
}
