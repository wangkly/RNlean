exports.UserReducer = (state={
    users:[]
},action)=>{
    switch(action.type){
        case 'initUsers':
        let userTemp =[];
            userTemp = userTemp.concat(state.users);
            userTemp =userTemp.concat(action.data);
            return Object.assign({},state,{users:userTemp});
        default:
        return state;
    }

}