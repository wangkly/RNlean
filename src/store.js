import {createStore,combineReducers,applyMiddleware} from 'redux';
import HomeReducer from './reducers/home-reduer';

import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'

const sageMiddleware = createSagaMiddleware(mySaga);

let rootReducer = combineReducers({HomeReducer}) 

let store = createStore(rootReducer,applyMiddleware(sageMiddleware));

sageMiddleware.run(mySaga);

export default store;


