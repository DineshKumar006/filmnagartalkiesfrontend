const initialState={
    teasersData:{},
    TeaserDetails:{}

}



const Reducer=(oldstate=initialState,actions)=>{
    switch(actions.type){
        case "TEASERS_DATA":return{
            ...oldstate,
            teasersData:actions.payload
        }
        case "TEASER_DETAILS":return{
            ...oldstate,
            TeaserDetails:actions.payload

        }
        default :return oldstate
    }
}

export default Reducer