import axios from 'axios';

let baseUrl = "https://filmnagartalkiesbackend-3pqr.onrender.com"
// let baseUrl = "http://localhost:9000"

export const fetchReviewDataById = async (id) => {
    try {
        // ${baseUrl}/api/fnt/getReview/602cf50f16faaa0015639250
        const response = await axios.get(`${baseUrl}/api/fnt/getReview/${id}`)
        // console.log(response)
        return response.data.result || {}
    } catch (error) {
        console.log(error)
        return {}
    }
}



export const getTeasers = async (pageno) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedTeasers?pageno=1`)
        // console.log(response)
        return Array.isArray(response.data.result) ? response.data.result : []
    } catch (error) {
        console.log(error)
        return []
    }
}


export const fetchTeaserDataById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getTeaser/${id}`)
        return response.data.result || {}
    } catch (error) {
        console.log(error)
        return {}
    }
}



export const getTrailers = async (pageno) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedTrailers?pageno=1`)
        // console.log(response)
        return Array.isArray(response.data.result) ? response.data.result : []
    } catch (error) {
        console.log(error)
        return []
    }
}


export const fetchTrailerDataById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getTrailer/${id}`)
        return response.data.result || {}
    } catch (error) {
        console.log(error)
        return {}
    }
}



export const getLimitedTrailers = async () => {

    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedTrailers?pageno=1&limit=10`)
        return Array.isArray(response.data.result) ? response.data.result : []
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getLimitedTeasers = async () => {

    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedTeasers?pageno=1&limit=10`)
        return Array.isArray(response.data.result) ? response.data.result : []
    } catch (error) {
        console.log(error)
        return []
    }
}




export const getLimitedPhotos = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedPhotos?pageno=1&limit=10`)
        return Array.isArray(response.data.result) ? response.data.result : []

    } catch (error) {
        console.log(error)
        return []
    }
}

export const getPhotosByid = async (photoId) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getPhoto/${photoId}`)
        // console.log(response)
        return response.data.result || {}

    } catch (error) {
        console.log(error)
        return {}
    }
}




export const getLimitedMaleActors = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedMaleActor?pageno=1&limit=10`)
        return Array.isArray(response.data.result) ? response.data.result : []

    } catch (error) {
        console.log(error)
        return []
    }
}

export const getMaleActorByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getMaleActor/${id}`)
        // console.log(response)
        return response.data.result || {}

    } catch (error) {
        console.log(error)
        return {}
    }
}





export const getLimitedFemaleActors = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedFeMaleActresses?pageno=1&limit=10`)
        return Array.isArray(response.data.result) ? response.data.result : []

    } catch (error) {
        console.log(error)
        return []
    }
}

export const getFemaleActorByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getFeMaleActresses/${id}`)
        // console.log(response)
        return response.data.result || {}

    } catch (error) {
        console.log(error)
        return {}
    }
}



export const getLimitedEvents = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedEvents?pageno=1&limit=10`)
        return Array.isArray(response.data.result) ? response.data.result : []

    } catch (error) {
        console.log(error)
        return []
    }
}

export const getEventByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getEvent/${id}`)
        // console.log(response)
        return response.data.result || {}

    } catch (error) {
        console.log(error)
        return {}
    }
}



export const getLimitedWorkingStills = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedWorkingStill?pageno=1&limit=10`)
        return Array.isArray(response.data.result) ? response.data.result : []

    } catch (error) {
        console.log(error)
        return []
    }
}

export const getWorkingStillsByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getWorkingStill/${id}`)
        // console.log(response)
        return response.data.result || {}

    } catch (error) {
        console.log(error)
        return {}
    }
}



export const getLimitedSongsAlbums = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedAlbums?pageno=1&limit=10`)
        return Array.isArray(response.data.result) ? response.data.result : []

    } catch (error) {
        console.log(error)
        return []
    }
}

export const getAlbumDetailsByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getAlbum/${id}`)
        // console.log(response)
        return response.data.result || {}

    } catch (error) {
        console.log(error)
        return {}
    }
}


export const getLimitedGeneralnews = async () => {

    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedGeneralnews?pageno=1&limit=10`)
        return Array.isArray(response.data.result) ? response.data.result : []
    } catch (error) {
        console.log(error)
        return []
    }
}


export const getGeneralNewsDetailsByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getGeneralnews/${id}`)
        // console.log(response)
        return response.data.result || {}

    } catch (error) {
        console.log(error)
        return {}
    }
}


export const getLimitedFilmnews = async () => {

    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedFilmnews?pageno=1&limit=10`)
        return Array.isArray(response.data.result) ? response.data.result : []
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getFilmNewsDetailsByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getFilmnews/${id}`)
        console.log('dinesh kumar')
        return response.data.result || {}

    } catch (error) {
        console.log(error)
        return {}
    }
}



export const getLimitedInterviews = async () => {

    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedInterviews?pageno=1&limit=10`)
        return Array.isArray(response.data.result) ? response.data.result : []
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getInterviewDetailsByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getInterview/${id}`)
        // console.log('dinesh kumar')
        return response.data.result || {}

    } catch (error) {
        console.log(error)
        return {}
    }
}