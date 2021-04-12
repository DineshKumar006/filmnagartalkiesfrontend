const initialState={
    PhotoDetailsData:{},
    ActorDetailsData:{},
    FemaleActorDetailsData:{},
    EventDetailsData:{},
    WorkingStillDetailsData:{},
    AlbumDetailsData:{},
    FilmNewsDetailsData:{},
    GeneralNewsDetailsData:{},
    InterviewsDetailsData:{}


}



const Reducer=(oldstate=initialState,actions)=>{
    switch(actions.type){
       case "PHOTO_DETAILS_DATA":return{
           ...oldstate,
           PhotoDetailsData:actions.payload
       }
      
       case "ADD_ACTOR_DETAILS":return{
        ...oldstate,
        ActorDetailsData:actions.payload
       }

       case "ADD_FEMALE_ACTOR_DETAILS":return{
        ...oldstate,
        FemaleActorDetailsData:actions.payload
       }
       case "ADD_EVENT_DETAILS":return{
        ...oldstate,
        EventDetailsData:actions.payload
       }
       
       case "ADD_WORKING_STILL_DETAILS":return{
        ...oldstate,
        WorkingStillDetailsData:actions.payload
       }

       case "ADD_ALBUM_DETAILS":return{
        ...oldstate,
        AlbumDetailsData:actions.payload
       }

       case "ADD_FILM_NEWS_DETAILS":return{
           ...oldstate,
           FilmNewsDetailsData:actions.payload
       }

       case "ADD_GENERAL_NEWS_DETAILS":return{
        ...oldstate,
        GeneralNewsDetailsData:actions.payload
    }

    

    case "ADD_INTERVIEWS_DETAILS":return{
        ...oldstate,
        InterviewsDetailsData:actions.payload
    }


       
        default :return oldstate
    }
}

export default Reducer