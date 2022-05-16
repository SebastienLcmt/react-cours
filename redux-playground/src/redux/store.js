import {createStore, combineReducers, applyMiddleware} from 'redux'
import CounterReducer from './reducers/CounterReducer';
import AddCartReducer from './reducers/AddCartReducer';
import dataImgReducer from './reducers/dataImgReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer,
  dataImgReducer,
})



//Création du Store où il va y avoir nos données, et nos reducers qui permettent de modifier ces données
const store = createStore(rootReducer, applyMiddleware(thunk)); // Passer le reducer en argument.

export default store;