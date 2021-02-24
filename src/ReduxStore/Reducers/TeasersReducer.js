const initialState={
    teasersData:{}
}



const Reducer=(oldstate=initialState,actions)=>{
    switch(actions.type){
        case "TEASERS_DATA":return{
            ...oldstate,
            teasersData:actions.payload
        }

        default :return oldstate
    }
}

export default Reducer