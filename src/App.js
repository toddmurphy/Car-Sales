import React from 'react';
import {connect} from 'react-redux'; //connect components

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {addFeature, deleteFeature} from './actions/featureActions';

const App = ({additionalFeatures, additionalPrice, car, deleteFeature, addFeature}) => {
  
  //move this state data to 'featureReducer' -->then delete state
  

  const removeFeature = feature => {
    // dispatch an action here to remove an item
    deleteFeature(feature)
  };

  const buyItem = feature => {
    // dipsatch an action here to add an item
    addFeature(feature)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} buyItem={buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

// setup mapStateToProps fuction to link to 'initialState'
const mapStateToProps = (state) => {
  return {
    // ...state
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {addFeature, deleteFeature})(App);
  //add 'featureActions' to emtpy object --> connect share data to 'actions'
   

