import {createStore,combineReducers,applyMiddleware} from 'redux';
import {HomeReducer} from './reducers/home-reducer';
import {UserReducer} from'./reducers/user-reducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'

const sageMiddleware = createSagaMiddleware(mySaga);

let rootReducer = combineReducers({HomeReducer,UserReducer}) 

let store = createStore(rootReducer,applyMiddleware(sageMiddleware));

sageMiddleware.run(mySaga);

exports.store = store;


