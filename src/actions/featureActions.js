//need to: 
//1. Add a feature to a card
//2. Remove a feature to a card

//ACTION TYPES
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';




//ACTION CREATORS
export const addFeature = (feature) => {
    //action
    return{
        type: ADD_FEATURE,
        payload: feature
    }
}


export const deleteFeature = (feature) => {
    //action
    return{
        type: REMOVE_FEATURE,
        payload: feature
    }
}
