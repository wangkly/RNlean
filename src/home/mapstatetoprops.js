exports.mapStateToProps=(state)=>{
    return {
        count:state.HomeReducer.count
    }
}