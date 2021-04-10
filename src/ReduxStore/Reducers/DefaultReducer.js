const initialState={
    LimitedTeasersData:{},
    LimitedTrailerData:{},
    LimitedPhotoData:{},
    LimitedActorsData:{},
    LimitedFemaleActorsData:{},
    LimitedEventsData:{},
    LimitedWorkingStillsData:{},
    LimitedAlbumsData:{},
    LimitedGeneralNewsData:{},
    LimitedFilmNewsData:{}

}



const Reducer=(oldstate=initialState,actions)=>{
    switch(actions.type){
        case "LIMITED_TRAILER_DATA":return{
            ...oldstate,
            LimitedTrailerData:actions.payload
        }
        case "LIMITED_TEASERS_DATA":return{
            ...oldstate,
            LimitedTeasersData:actions.payload
        }
       case "LIMITED_PHOTO_DATA":return{
           ...oldstate,
           LimitedPhotoData:actions.payload
       }
       case "ADD_LIMITED_ACTORS":return{
        ...oldstate,
        LimitedActorsData:actions.payload
       }
       case "ADD_LIMITED_FEMALE_ACTORS":return{
        ...oldstate,
        LimitedFemaleActorsData:actions.payload
       }
       case "ADD_LIMITED_EVENT":return{
        ...oldstate,
        LimitedEventsData:actions.payload
       }

       case "ADD_WORKING_STILLS_DATA":return{
           ...oldstate,
           LimitedWorkingStillsData:actions.payload
       }

       case "ADD_ALBUMS_DATA":return{
        ...oldstate,
        LimitedAlbumsData:actions.payload
    }

    case "ADD_GENERAL_NEWS_DATA":return{
        ...oldstate,
        LimitedGeneralNewsData:actions.payload

    }

    case "ADD_FILM_NEWS_DATA":return{
        ...oldstate,
        LimitedFilmNewsData:actions.payload

    }


    
       
       
        default :return oldstate
    }
}

export default Reducer