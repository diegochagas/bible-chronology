import { combineReducers } from 'redux';
import { GENESIS, EXODUS } from '../actions';

const genesisReducer = (state = [], action) => {
  switch(action.type){
    case GENESIS:
      return action.payload;
    default:
      return state;
  }
}

const exodusReducer = (state = [], action) => {
  switch(action.type){
    case EXODUS:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  genesis: genesisReducer,
  exodus: exodusReducer
});
