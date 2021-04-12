


export const LimitedTrailerData=(payload)=>{
    return{
        type:"LIMITED_TRAILER_DATA",
        payload
    }
}


export const LimitedTeasersData=(payload)=>{
    // console.log(payload)
    return{
        type:"LIMITED_TEASERS_DATA",
        payload
    }
}


export const addPhotoDetailsHandler=(payload)=>{
    return{
        type:"PHOTO_DETAILS_DATA",
        payload
    }
}


export const addActorsDataHandler=(payload)=>{
    return{
        type:"ADD_LIMITED_ACTORS",
        payload
    } 
}

export const addActorDetailsDataById=(payload)=>{
    return{
        type:"ADD_ACTOR_DETAILS",
        payload
    } 

}

export const addFemaleActorsDataHandler=(payload)=>{
    return{
        type:'ADD_LIMITED_FEMALE_ACTORS',
        payload
    }
}

export const addFemaleActorDetailsDataById=(payload)=>{
    return{
        type:"ADD_FEMALE_ACTOR_DETAILS",
        payload
    } 

}


export const addEventDataHandler=(payload)=>{
    return{
        type:'ADD_LIMITED_EVENT',
        payload
    }
}

export const addEventDetailsDataById=(payload)=>{
    return{
        type:"ADD_EVENT_DETAILS",
        payload
    } 

}


export const addAllWorkingStillDataHandler=(payload)=>{
    return{
        type:'ADD_WORKING_STILLS_DATA',
        payload
    }
}

export const addWorkingStillDetailsDataById=(payload)=>{
    return{
        type:"ADD_WORKING_STILL_DETAILS",
        payload
    } 

}

export const addAlbumDataHandler=(payload)=>{
    return{
        type:'ADD_ALBUMS_DATA',
        payload
    }
}

export const addAlbumDetailsDataById=(payload)=>{
    return{
        type:"ADD_ALBUM_DETAILS",
        payload
    } 

}

export const addGeneralNewsDataHandler=(payload)=>{
    // console.log(payload)
    return{
        type:"ADD_GENERAL_NEWS_DATA",
        payload
    }
}


export const addGeneralNewsDetailsDataById=(payload)=>{
    return{
        type:"ADD_GENERAL_NEWS_DETAILS",
        payload
    } 

}

export const addFilmNewsDataHandler=(payload)=>{
    // console.log(payload)
    return{
        type:"ADD_FILM_NEWS_DATA",
        payload
    }
}


export const addFilmNewsDetailsDataById=(payload)=>{
    return{
        type:"ADD_FILM_NEWS_DETAILS",
        payload
    } 

}

export const addInterviewsDataHandler=(payload)=>{
    // console.log(payload)
    return{
        type:"ADD_INTERVIEWS_DATA",
        payload
    }
}



export const addInterviewsDetailsDataById=(payload)=>{
    return{
        type:"ADD_INTERVIEWS_DETAILS",
        payload
    } 

}