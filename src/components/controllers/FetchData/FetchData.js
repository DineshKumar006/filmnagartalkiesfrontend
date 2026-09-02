import axios from 'axios';
import { FALLBACK_CONTENT } from '../../../data/fallbackContent';

/**
 * The backend currently returns empty lists for most sections. While that is
 * the case, the sample records in src/data/fallbackContent.js stand in so the
 * screens have something to render. Flip this to false to show the real
 * (empty) state instead — nothing else needs to change.
 */
const SHOW_SAMPLE_CONTENT_WHEN_EMPTY = true

const announced = {}

const announce = (key) => {
    if (announced[key]) return
    announced[key] = true
    console.info(`[FNT] "${key}" came back empty from the API — showing sample content.`)
}

/** Returns the API rows, or the sample list when the API has nothing. */
const withFallback = (rows, key) => {
    if (Array.isArray(rows) && rows.length > 0) return rows
    if (!SHOW_SAMPLE_CONTENT_WHEN_EMPTY) return []
    announce(key)
    return FALLBACK_CONTENT[key] || []
}

/** Same idea for a single document, looked up by id inside the sample list. */
const withFallbackOne = (doc, key, id) => {
    if (doc && typeof doc === 'object' && Object.keys(doc).length > 0) return doc
    if (!SHOW_SAMPLE_CONTENT_WHEN_EMPTY) return {}
    announce(key)
    const match = (FALLBACK_CONTENT[key] || []).find(item => item._id === id)
    return match || {}
}

let baseUrl = "https://filmnagartalkiesbackend-3pqr.onrender.com"
// let baseUrl = "http://localhost:9000"

export const getAllReviews = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getAllReview`)
        return withFallback(response.data.result, 'reviews')
    } catch (error) {
        console.log(error)
        return withFallback([], 'reviews')
    }
}

export const fetchReviewDataById = async (id) => {
    try {
        // ${baseUrl}/api/fnt/getReview/602cf50f16faaa0015639250
        const response = await axios.get(`${baseUrl}/api/fnt/getReview/${id}`)
        // console.log(response)
        return withFallbackOne(response.data.result, 'reviews', id)
    } catch (error) {
        console.log(error)
        return withFallbackOne(null, 'reviews', id)
    }
}



export const getTeasers = async (pageno) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedTeasers?pageno=1`)
        // console.log(response)
        return withFallback(response.data.result, 'teasers')
    } catch (error) {
        console.log(error)
        return withFallback([], 'teasers')
    }
}


export const fetchTeaserDataById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getTeaser/${id}`)
        return withFallbackOne(response.data.result, 'teasers', id)
    } catch (error) {
        console.log(error)
        return withFallbackOne(null, 'teasers', id)
    }
}



export const getTrailers = async (pageno) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedTrailers?pageno=1`)
        // console.log(response)
        return withFallback(response.data.result, 'trailers')
    } catch (error) {
        console.log(error)
        return withFallback([], 'trailers')
    }
}


export const fetchTrailerDataById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getTrailer/${id}`)
        return withFallbackOne(response.data.result, 'trailers', id)
    } catch (error) {
        console.log(error)
        return withFallbackOne(null, 'trailers', id)
    }
}



export const getLimitedTrailers = async () => {

    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedTrailers?pageno=1&limit=10`)
        return withFallback(response.data.result, 'trailers')
    } catch (error) {
        console.log(error)
        return withFallback([], 'trailers')
    }
}

export const getLimitedTeasers = async () => {

    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedTeasers?pageno=1&limit=10`)
        return withFallback(response.data.result, 'teasers')
    } catch (error) {
        console.log(error)
        return withFallback([], 'teasers')
    }
}




export const getLimitedPhotos = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedPhotos?pageno=1&limit=10`)
        return withFallback(response.data.result, 'photos')

    } catch (error) {
        console.log(error)
        return withFallback([], 'photos')
    }
}

export const getPhotosByid = async (photoId) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getPhoto/${photoId}`)
        // console.log(response)
        return withFallbackOne(response.data.result, 'photos', photoId)

    } catch (error) {
        console.log(error)
        return withFallbackOne(null, 'photos', photoId)
    }
}




export const getLimitedMaleActors = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedMaleActor?pageno=1&limit=10`)
        return withFallback(response.data.result, 'actors')

    } catch (error) {
        console.log(error)
        return withFallback([], 'actors')
    }
}

export const getMaleActorByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getMaleActor/${id}`)
        // console.log(response)
        return withFallbackOne(response.data.result, 'actors', id)

    } catch (error) {
        console.log(error)
        return withFallbackOne(null, 'actors', id)
    }
}





export const getLimitedFemaleActors = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedFeMaleActresses?pageno=1&limit=10`)
        return withFallback(response.data.result, 'actresses')

    } catch (error) {
        console.log(error)
        return withFallback([], 'actresses')
    }
}

export const getFemaleActorByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getFeMaleActresses/${id}`)
        // console.log(response)
        return withFallbackOne(response.data.result, 'actresses', id)

    } catch (error) {
        console.log(error)
        return withFallbackOne(null, 'actresses', id)
    }
}



export const getLimitedEvents = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedEvents?pageno=1&limit=10`)
        return withFallback(response.data.result, 'events')

    } catch (error) {
        console.log(error)
        return withFallback([], 'events')
    }
}

export const getEventByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getEvent/${id}`)
        // console.log(response)
        return withFallbackOne(response.data.result, 'events', id)

    } catch (error) {
        console.log(error)
        return withFallbackOne(null, 'events', id)
    }
}



export const getLimitedWorkingStills = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedWorkingStill?pageno=1&limit=10`)
        return withFallback(response.data.result, 'workingStills')

    } catch (error) {
        console.log(error)
        return withFallback([], 'workingStills')
    }
}

export const getWorkingStillsByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getWorkingStill/${id}`)
        // console.log(response)
        return withFallbackOne(response.data.result, 'workingStills', id)

    } catch (error) {
        console.log(error)
        return withFallbackOne(null, 'workingStills', id)
    }
}



export const getLimitedSongsAlbums = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedAlbums?pageno=1&limit=10`)
        return withFallback(response.data.result, 'albums')

    } catch (error) {
        console.log(error)
        return withFallback([], 'albums')
    }
}

export const getAlbumDetailsByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getAlbum/${id}`)
        // console.log(response)
        return withFallbackOne(response.data.result, 'albums', id)

    } catch (error) {
        console.log(error)
        return withFallbackOne(null, 'albums', id)
    }
}


export const getLimitedGeneralnews = async () => {

    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedGeneralnews?pageno=1&limit=10`)
        return withFallback(response.data.result, 'generalNews')
    } catch (error) {
        console.log(error)
        return withFallback([], 'generalNews')
    }
}


export const getGeneralNewsDetailsByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getGeneralnews/${id}`)
        // console.log(response)
        return withFallbackOne(response.data.result, 'generalNews', id)

    } catch (error) {
        console.log(error)
        return withFallbackOne(null, 'generalNews', id)
    }
}


export const getLimitedFilmnews = async () => {

    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedFilmnews?pageno=1&limit=10`)
        return withFallback(response.data.result, 'filmNews')
    } catch (error) {
        console.log(error)
        return withFallback([], 'filmNews')
    }
}

export const getFilmNewsDetailsByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getFilmnews/${id}`)
        console.log('dinesh kumar')
        return withFallbackOne(response.data.result, 'filmNews', id)

    } catch (error) {
        console.log(error)
        return withFallbackOne(null, 'filmNews', id)
    }
}



export const getLimitedInterviews = async () => {

    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getLimitedInterviews?pageno=1&limit=10`)
        return withFallback(response.data.result, 'interviews')
    } catch (error) {
        console.log(error)
        return withFallback([], 'interviews')
    }
}

export const getInterviewDetailsByid = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/api/fnt/getInterview/${id}`)
        // console.log('dinesh kumar')
        return withFallbackOne(response.data.result, 'interviews', id)

    } catch (error) {
        console.log(error)
        return withFallbackOne(null, 'interviews', id)
    }
}