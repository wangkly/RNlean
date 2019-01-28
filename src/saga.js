import {call,put,takeEvery,takeLatest} from 'redux-saga/effects';
import Api from './Api';
function delay(){
    return new Promise((resolve)=>{
        setTimeout(
            ()=>{
                console.log('delay......')
                resolve()
            },2000)
    })
}

function* beforeAdd(action){
    let resp =  yield call(Api.getUser);
    console.log('beforeAdd call ==>resp',resp)
    yield put(Object.assign({},{...action},{type:"increase"}))
}

function* mySaga(){
    yield takeEvery("beforeADD",beforeAdd)
}

// function* mySaga(){
//     yield takeLatest("beforeADD",beforeAdd)
// }


export default mySaga;