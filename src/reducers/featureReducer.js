// IMPORT 'action types' from featureActions
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/featureActions';


// 'initialState' is our initial state and data to pass to 'featureReducer'
const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const featureReducer = (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        //add logic to add feature
        
            additionalPrice: state.additionalPrice + action.payload.price,

            additionalFeatures: state.additionalFeatures.filter((item) => {
              return item.id !== action.payload.id
            }),

            car: {
              ...state.car, 
              features: [...state.car.features, action.payload]
              }
        }
      
    case REMOVE_FEATURE:

        const newFeatures = state.car.features.filter((item) => {
          return item.id !== action.payload.id
        });
        console.log(action.payload.id)
        console.log(newFeatures)

      return {
        ...state,

        additionalPrice: state.additionalPrice - action.payload.price,

        // additionalFeatures: state.additionalFeatures.filter((item) => {
        //   return item.id !== action.payload.id
        // }),

        car: {
          ...state.car,
          features: newFeatures
        }
     }


    default:
      return state;
  }
}