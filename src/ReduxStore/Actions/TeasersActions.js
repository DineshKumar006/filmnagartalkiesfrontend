


export const TeasersData=(payload)=>{
    // console.log(payload)
    return{
        type:"TEASERS_DATA",
        payload
    }
}

export const TeasersDetail=(payload)=>{
    return{
        type:"TEASER_DETAILS",
        payload
    }
}