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
    yield call(delay);

    yield put(Object.assign({},{...action},{type:"increase"}))
}

function* initUser(action){
    let resp = yield call(Api.getUser,action.param);
    yield put({type:'initUsers',data:resp.content})
}

function* mySaga(){
    yield takeEvery("beforeADD",beforeAdd)
    yield takeLatest("initUser",initUser)
}

// function* mySaga(){
//     yield takeLatest("beforeADD",beforeAdd)
// }


export default mySaga;