import {createStore,combineReducers} from 'redux';
import HomeReducer from './reducers/home-reduer';
let rootReducer = combineReducers({HomeReducer}) 

let store = createStore(rootReducer)


