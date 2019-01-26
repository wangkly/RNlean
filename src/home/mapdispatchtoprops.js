

const increaseAction={type:'increase'}
const beforAddAction={type:'beforeADD'}
const decreaseAction={type:'decrease'}

exports.mapDispatchToProps =(dispatch)=>{
    return {
        onIncreasePress:()=>dispatch(beforAddAction),
        onDecreasePress:()=>dispatch(decreaseAction)
    }
}