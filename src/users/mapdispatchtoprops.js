exports.mapDispatchToProps=(dispatch)=>{
    return{
        initUser:(param)=>dispatch({type:'initUser',param:param})
    }
}