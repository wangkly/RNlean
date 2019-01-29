import MyFetch from './myFetch';

exports.getUser = (param)=>{
   return new Promise((resolve)=>{
        MyFetch('http://127.0.0.1:3003/user').then((res)=>{
            resolve(res)
        })
    })
}