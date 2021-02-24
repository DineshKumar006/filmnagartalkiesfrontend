const initialState={
    reviewData:{}
}



const Reducer=(oldstate=initialState,actions)=>{
    switch(actions.type){
        case "REVIEW_DETAILS":return{
            ...oldstate,
            reviewData:actions.payload
        }

        default :return oldstate
    }
}

export default Reducer