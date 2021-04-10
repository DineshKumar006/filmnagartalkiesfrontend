const initialState={
    trailerData:{},
    trailerDetails:{}

}



const Reducer=(oldstate=initialState,actions)=>{
    switch(actions.type){
        case "TRAILER_DATA":return{
            ...oldstate,
            trailerData:actions.payload
        }
        case "TRAILER_DETAILS":return{
            ...oldstate,
            trailerDetails:actions.payload

        }
        default :return oldstate
    }
}

export default Reducer