exports.mapStateToProps=(state)=>{
    return{
        users:state.UserReducer.users
    }
}